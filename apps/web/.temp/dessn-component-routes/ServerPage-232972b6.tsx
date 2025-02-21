import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Mock i18n provider to handle the missing dependency
const MockI18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Wrap the imported component with necessary providers
const WrappedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/teams/[id]/onboard-members/page').then((mod) => {
    const Component = mod.default;
    return function WrappedImportedComponent(props: any) {
      return (
        <MockI18nProvider>
          <Component {...props} />
        </MockI18nProvider>
      );
    };
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
        <WrappedComponent />
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
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Something went wrong loading the component.
        </div>
      );
    }

    return this.props.children;
  }
}