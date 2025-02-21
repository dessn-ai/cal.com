import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const MockOrgSettingsAttributesPage = () => <div>Mock OrgSettingsAttributesPage</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Mock SettingsHeader {children}</div>
);

// Mock translations
const mockTranslate = (key: string) => key;

// Mock modules
const mockedModules = {
  '@calcom/ee/organizations/pages/settings/attributes/attributes-list-view': MockOrgSettingsAttributesPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': {
    getTranslate: () => mockTranslate,
  },
};

// Create a wrapped version of the imported component with mocked dependencies
const WrappedComponent = () => {
  try {
    const Component = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/page'));
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading component:', error);
    return <div>Error loading component</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <WrappedComponent />
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

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}