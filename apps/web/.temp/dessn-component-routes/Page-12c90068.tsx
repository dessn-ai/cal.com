import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const MockWorkspacePlatformsPage = () => <div>WorkspacePlatformsPage Mock</div>;
const MockSettingsHeader = ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);
const MockLicenseRequired = ({ children }) => <>{children}</>;

// Mock modules before importing the component
window.__mocks__ = {
  "@calcom/features/ee/organizations/pages/settings/admin/WorkspacePlatformPage": MockWorkspacePlatformsPage,
  "@calcom/features/settings/appDir/SettingsHeader": MockSettingsHeader,
  "@calcom/features/ee/common/components/LicenseRequired": MockLicenseRequired,
  "app/_utils": {
    _generateMetadata: () => ({}),
    getTranslate: () => (key) => key,
  }
};

// Wrap the import in a try-catch to handle potential import errors
let ImportedComponent;
try {
  ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/workspace-platforms/page'));
} catch (error) {
  ImportedComponent = () => <div>Error loading component</div>;
}

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}