import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (hasError) {
      console.error('Error in component:', error);
    }
  }, [hasError, error]);

  if (hasError) {
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error?.toString()}
        </details>
      </div>
    );
  }

  return children;
};

// Mock Feature Provider to avoid external dependencies
const MockFeatureProvider = ({ children }) => {
  const mockFeatureFlags = {
    flags: {},
    features: {},
  };
  return React.createElement(React.Fragment, null, children);
};

const ComponentPreview = () => {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  const [Component, setComponent] = React.useState(null);
  const [loadError, setLoadError] = React.useState(null);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/payment/[uid]/page');
        setComponent(() => module.default);
      } catch (error) {
        console.error('Failed to load component:', error);
        setLoadError(error);
      }
    };

    loadComponent();
  }, []);

  if (loadError) {
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        <h2>Failed to load component</h2>
        <pre>{loadError.toString()}</pre>
      </div>
    );
  }

  if (!Component) {
    return <div>Loading component...</div>;
  }

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockFeatureProvider>
          <Component params={params} searchParams={searchParams} />
        </MockFeatureProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ComponentPreview;