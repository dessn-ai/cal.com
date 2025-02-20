import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/forgot-password/page')
  .catch(() => ({
    default: () => <div>Error: Failed to load component</div>
  }))
);

// Mock providers to prevent context errors
const MockSessionProvider = ({ children }) => <>{children}</>;
const MockI18nextProvider = ({ children }) => <>{children}</>;
const MockTooltipProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockQueryClientProvider = ({ children }) => <>{children}</>;
const MockTRPCProvider = ({ children }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <ErrorBoundary>
      <MockSessionProvider>
        <MockI18nextProvider>
          <MockTRPCProvider>
            <MockQueryClientProvider>
              <MockTooltipProvider>
                <MockFeatureProvider>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent {...props} />
                  </Suspense>
                </MockFeatureProvider>
              </MockTooltipProvider>
            </MockQueryClientProvider>
          </MockTRPCProvider>
        </MockI18nextProvider>
      </MockSessionProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}