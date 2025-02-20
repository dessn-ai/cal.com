import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

const ErrorFallback = ({ error }) => (
  <div style={{ color: 'red', padding: '20px' }}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

const LazyComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/[clientId]/edit/webhooks/page')
  .catch(error => ({
    default: () => (
      <div style={{ color: 'red', padding: '20px' }}>
        Failed to load component: {error.message}
      </div>
    )
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading component...</div>}>
        <div style={{ padding: '20px' }}>
          <LazyComponent />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}