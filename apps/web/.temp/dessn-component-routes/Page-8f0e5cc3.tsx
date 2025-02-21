import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/appearance/page').catch(() => ({
  default: () => <div>Error loading component</div>
})));

// Simplified mock setup
const mockTranslate = (key: string) => key;

if (typeof window !== 'undefined') {
  // Only mock in browser environment
  window.getTranslate = () => Promise.resolve(mockTranslate);
}

// Fallback component
const LoadingFallback = () => <div>Loading...</div>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any required state here
    teamId: '1', // Default team ID
  });

  return (
    <Suspense fallback={<LoadingFallback />}>
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

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}