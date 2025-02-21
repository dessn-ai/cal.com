import React, { Suspense, useState } from 'react';

// Wrap the import in a try-catch
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/[clientId]/edit/webhooks/page')
  .catch((error) => {
    console.error('Failed to load component:', error);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
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