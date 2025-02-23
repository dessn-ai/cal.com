import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/[clientId]/edit/webhooks/page')
  .catch((err) => {
    console.error("Failed to load component:", err);
    return { default: () => <div>Error loading component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full">
          <ImportedComponent />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

// Simple ErrorBoundary component
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