import React, { Suspense, lazy } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the imported component
const ImportedComponent = lazy(() => import('../../app/(use-page-wrapper)/settings/platform/new/page')
  .catch(() => ({ default: () => <div>Failed to load component</div> }))
);

function SafeProvider({ children }: { children: React.ReactNode }) {
  return children;
}

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

  let props;
  try {
    props = {
      params: JSON.parse(state.params.value),
      searchParams: JSON.parse(state.searchParams.value),
    };
  } catch (e) {
    props = {
      params: { id: "123" },
      searchParams: { query: "test" },
    };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading component...</div>}>
        <SafeProvider>
          <ImportedComponent {...props} />
        </SafeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}