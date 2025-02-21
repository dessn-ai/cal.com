import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/video/meeting-not-started/[uid]/page')
  .catch(() => {
    // Fallback module in case of import error
    return {
      default: () => <div>Error: Failed to load component</div>
    };
  })
);

interface Params {
  uid: string;
}

interface SearchParams {
  query: string;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value) as Params;
  const searchParams = JSON.parse(state.searchParams.value) as SearchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent params={params} searchParams={searchParams} />
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

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}