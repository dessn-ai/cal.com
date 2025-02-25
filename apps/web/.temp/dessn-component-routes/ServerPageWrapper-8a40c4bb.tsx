import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/[clientId]/edit/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

// Error boundary component
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
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </ErrorBoundary>
  );
}