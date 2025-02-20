import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and utilities
const MockLegacyPage = () => <div>Mock Legacy Page</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Mock Settings Header {children}</div>
);
const mockGetTranslate = () => (key: string) => key;

// Mock modules
const mockModules = {
  '@calcom/features/ee/organizations/pages/settings/profile': MockLegacyPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': {
    getTranslate: mockGetTranslate,
  },
};

// Create a dynamic import wrapper
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/profile/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}