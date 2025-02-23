import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers and contexts to avoid dependency issues
const MockSessionProvider = ({ children }) => <>{children}</>;
const MockI18nextProvider = ({ children }) => <>{children}</>;
const MockTooltipProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockQueryClientProvider = ({ children }) => <>{children}</>;

const ImportedComponentWithErrorBoundary = React.lazy(() => 
  import('../../app/(use-page-wrapper)/auth/login/page')
    .then(module => ({
      default: (props) => {
        try {
          return <module.default {...props} />;
        } catch (error) {
          console.error('Error rendering login page:', error);
          return <div>Error loading login page component</div>;
        }
      }
    }))
    .catch(error => ({
      default: () => {
        console.error('Error loading module:', error);
        return <div>Failed to load login page component</div>;
      }
    }))
);

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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockSessionProvider>
        <MockI18nextProvider>
          <MockQueryClientProvider>
            <MockTooltipProvider>
              <MockFeatureProvider>
                <ErrorBoundary>
                  <ImportedComponentWithErrorBoundary 
                    params={params} 
                    searchParams={searchParams} 
                  />
                </ErrorBoundary>
              </MockFeatureProvider>
            </MockTooltipProvider>
          </MockQueryClientProvider>
        </MockI18nextProvider>
      </MockSessionProvider>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}