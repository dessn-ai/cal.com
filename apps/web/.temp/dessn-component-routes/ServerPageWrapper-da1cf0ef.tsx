import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component to handle dynamic imports better
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/billing/page')
  .catch((err) => {
    console.error("Error loading billing page component:", err);
    return { default: () => <div>Error loading component</div> };
  })
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="w-full">
          <ImportedComponent />
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; FallbackComponent: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; FallbackComponent: React.ComponentType<{ error: Error }> }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}