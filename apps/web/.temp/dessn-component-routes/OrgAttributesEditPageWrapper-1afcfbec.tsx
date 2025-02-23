import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple error boundary component
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
        <div style={{ color: 'red', padding: '20px' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create a lazy-loaded component wrapper
const LazyComponent = React.lazy(() =>
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/[id]/edit/page')
    .then((module) => ({ default: module.default }))
    .catch((error) => {
      console.error('Failed to load component:', error);
      return {
        default: () => (
          <div style={{ color: 'red', padding: '20px' }}>
            Failed to load the component. Please check the console for more details.
          </div>
        ),
      };
    })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '20px' }}>
          <LazyComponent />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}