import React, { Suspense, lazy } from 'react';
import { useParentState } from '../useIframeState';

// Dynamically import the component
const DynamicComponent = lazy(() => import('../../app/(use-page-wrapper)/getting-started/[[...step]]/page').catch(() => ({
  default: () => <div>Error loading component</div>
})));

// Simple error boundary component
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
      return <div>Something went wrong loading the component.</div>;
    }
    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <Suspense fallback={<div>Loading component...</div>}>
        <div style={{ padding: '20px' }}>
          <DynamicComponent params={params} searchParams={searchParams} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}