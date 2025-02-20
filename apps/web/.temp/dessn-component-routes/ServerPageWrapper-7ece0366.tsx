import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/oauth2/authorize/page'));

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div style={{ color: 'red', padding: '1rem' }}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

// Loading component
const LoadingFallback = () => (
  <div style={{ padding: '1rem' }}>Loading...</div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ImportedComponent />
      </ErrorBoundary>
    </React.Suspense>
  );
}

// Simple Error Boundary implementation
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  FallbackComponent: React.ComponentType<{ error: Error }>;
}> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent error={this.state.error as Error} />;
    }

    return this.props.children;
  }
}