import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/installation/[[...step]]/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ step: ['1'] }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: 'test' }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { step: ['1'] };
    searchParams = { query: 'test' };
  }

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