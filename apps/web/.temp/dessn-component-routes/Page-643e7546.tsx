import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => (key: string) => key,
};

const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-settings-header">{children}</div>
);

const MockImpersonationView = () => (
  <div data-testid="mock-impersonation-view">Impersonation View</div>
);

// Mock the imported component directly
const ImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <h1>Impersonation Settings</h1>
      </MockSettingsHeader>
      <MockImpersonationView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

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