import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a fallback error component
const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert" className="error-boundary">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

// Create an error boundary component
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
      return <ErrorFallback error={this.state.error!} />;
    }

    return this.props.children;
  }
}

// Wrap the imported component in a lazy load
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/oauth2/authorize/page')
  .catch(error => ({
    default: () => <ErrorFallback error={error} />
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </ErrorBoundary>
  );
}