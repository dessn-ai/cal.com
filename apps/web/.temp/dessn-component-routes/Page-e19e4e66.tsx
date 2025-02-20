import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockOrgSettingsAttributesPage: React.FC = () => {
  return <div>Mock OrgSettingsAttributesPage</div>;
};

const MockSettingsHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div>Mock SettingsHeader {children}</div>;
};

// Mock utils
const mockGetTranslate = (key: string) => key;

// Create mock modules
const mockModules = {
  'app/_utils': {
    getTranslate: () => mockGetTranslate,
  },
  '@calcom/ee/organizations/pages/settings/attributes/attributes-list-view': MockOrgSettingsAttributesPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
};

// Lazy load the imported component with error handling
const LazyImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/page')
    .catch((error) => {
      console.error('Failed to load component:', error);
      return { default: () => <div>Error loading component</div> };
    })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <LazyImportedComponent />
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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}