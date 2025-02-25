import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the dynamic import in a try-catch
const InsightsPage = React.lazy(() => import('../../app/(use-page-wrapper)/insights/page').catch(() => ({
  default: () => <div>Error loading Insights page component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <InsightsPage />
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