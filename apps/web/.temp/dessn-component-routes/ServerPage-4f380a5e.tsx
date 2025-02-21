import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/organizations/[id]/about/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
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
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}