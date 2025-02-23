import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers and contexts that might be needed
const mockFeatureFlags = {
  flags: {},
  setFlag: () => {},
};

const MockFeatureProvider = ({ children }) => children;
const MockTooltipProvider = ({ children }) => children;
const MockSessionProvider = ({ children }) => children;

export default function ComponentPreview() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ step: ['1'] }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: 'test' }),
      label: "Search Params",
    },
  });

  let params = { step: ['1'] };
  let searchParams = { query: 'test' };

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
  }

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Dynamic import wrapped in try-catch
        const ImportedComponent = (await import('../../app/(use-page-wrapper)/getting-started/[[...step]]/page')).default;
        setComponent(() => ImportedComponent);
      } catch (err) {
        console.error('Error loading component:', err);
        setError(err);
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        Error loading component: {error.message}
      </div>
    );
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockSessionProvider>
          <MockTooltipProvider>
            <MockFeatureProvider>
              <Component params={params} searchParams={searchParams} />
            </MockFeatureProvider>
          </MockTooltipProvider>
        </MockSessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

// Simple Error Boundary implementation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          Something went wrong: {this.state.error?.message}
        </div>
      );
    }

    return this.props.children;
  }
}