import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in a try-catch
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/page')
  .catch(() => ({
    default: () => <div>Error: Failed to load component</div>
  }))
);

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      params: {
        type: "string",
        value: JSON.stringify({ id: "example-id" }),
        label: "Params",
      },
      searchParams: {
        type: "string",
        value: JSON.stringify({ query: "example-query" }),
        label: "Search Params",
      },
    });

    let params;
    let searchParams;

    try {
      params = JSON.parse(state.params.value);
      searchParams = JSON.parse(state.searchParams.value);
    } catch (e) {
      params = { id: "example-id" };
      searchParams = { query: "example-query" };
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ImportedComponent params={params} searchParams={searchParams} />
        </ErrorBoundary>
      </Suspense>
    );
  } catch (error) {
    return <div>Error: Failed to render component</div>;
  }
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

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}