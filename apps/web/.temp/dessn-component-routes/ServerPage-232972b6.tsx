import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component to handle dynamic imports better
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/teams/[id]/onboard-members/page')
  .catch((error) => {
    console.error("Failed to load component:", error);
    return { default: () => <div>Failed to load component</div> };
  })
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div style={{ color: 'red', padding: '1rem' }}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary implementation
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
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}