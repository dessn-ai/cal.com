import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/plans/page'));

// Simple loading component
const Loading = () => <div>Loading...</div>;

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
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
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <ImportedComponent />
      </Suspense>
    </ErrorBoundary>
  );
}