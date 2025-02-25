import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the component with SSR disabled
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/auth/verify-email/page').catch(() => {
    // Return a fallback component if import fails
    return () => <div>Error loading component</div>;
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ComponentPreview() {
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