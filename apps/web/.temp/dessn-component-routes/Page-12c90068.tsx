import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockWorkspacePlatformsPage = () => <div>WorkspacePlatformsPage</div>;

const MockSettingsHeader = ({ 
  children, 
  title, 
  description 
}: { 
  children?: React.ReactNode; 
  title?: string; 
  description?: string;
}) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

const MockLicenseRequired = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock utils
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => (key: string) => key,
};

// Mock the imports directly
const mocks = {
  '@calcom/features/ee/organizations/pages/settings/admin/WorkspacePlatformPage': MockWorkspacePlatformsPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  '@calcom/features/ee/common/components/LicenseRequired': MockLicenseRequired,
  'app/_utils': mockUtils,
};

// Create a wrapped version of the imported component that uses our mocks
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/workspace-platforms/page')
    .then(module => ({
      default: () => {
        try {
          return <MockWorkspacePlatformsPage />;
        } catch (error) {
          console.error('Error rendering component:', error);
          return <div>Error: Failed to render component</div>;
        }
      }
    }))
);

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <ErrorBoundary fallback={<div>Error loading component</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// Error Boundary implementation
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