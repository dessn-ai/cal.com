import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockAdminAPIView = () => <div>AdminAPIView Mock</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>SettingsHeader Mock {children}</div>
);

// Create mock modules
const mockUtils = {
  getTranslate: () => (key: string) => key,
  _generateMetadata: () => ({
    title: 'Mock Title',
    description: 'Mock Description'
  })
};

// Mock the actual component instead of using dynamic import
const ImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <MockAdminAPIView />
      </MockSettingsHeader>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple error boundary component
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