import React from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import with error boundary
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/(main-nav)/teams/page')
    .catch(() => ({
      default: () => (
        <div>Error: Could not load component. This might be a server component that needs to be wrapped differently.</div>
      ),
    }))
);

// Create a simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the component implementation.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "example-token" }),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="preview-container">
          <ImportedComponent {...props} />
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
}