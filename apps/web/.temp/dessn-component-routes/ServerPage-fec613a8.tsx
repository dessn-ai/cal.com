import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/video/meeting-ended/[uid]/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

interface StateParams {
  params: {
    type: string;
    value: string;
    label: string;
  };
  searchParams: {
    type: string;
    value: string;
    label: string;
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState<StateParams>({
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

  const params = React.useMemo(() => {
    try {
      return JSON.parse(state.params.value);
    } catch (e) {
      console.error('Failed to parse params:', e);
      return { uid: "example-uid" };
    }
  }, [state.params.value]);

  const searchParams = React.useMemo(() => {
    try {
      return JSON.parse(state.searchParams.value);
    } catch (e) {
      console.error('Failed to parse searchParams:', e);
      return { query: "example" };
    }
  }, [state.searchParams.value]);

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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}