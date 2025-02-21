import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/categories/page')
  .catch(() => ({ default: () => <div>Error loading component</div> }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ category: "calendar" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const pageProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent {...pageProps} />
      </ErrorBoundary>
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