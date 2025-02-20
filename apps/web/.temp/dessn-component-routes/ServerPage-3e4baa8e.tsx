import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/routing-forms/[...pages]/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      params: {
        type: "string",
        value: JSON.stringify({ pages: ["routing-link", "form1"] }),
        label: "Params",
      },
      searchParams: {
        type: "string",
        value: JSON.stringify({ query: "example" }),
        label: "Search Params",
      },
    });

    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ImportedComponent params={params} searchParams={searchParams} />
        </ErrorBoundary>
      </Suspense>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
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

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}