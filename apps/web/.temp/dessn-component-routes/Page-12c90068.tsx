import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockWorkspacePlatformsPage = () => {
  return (
    <div className="workspace-platforms-page">
      <MockSettingsHeader 
        title="Workspace Platforms"
        description="Manage your workspace platforms"
      >
        <div className="mock-content">
          <h2>Platforms Configuration</h2>
          <div className="mock-platform-list">
            <div className="mock-platform-item">
              <h3>Platform 1</h3>
              <p>Platform description</p>
            </div>
          </div>
        </div>
      </MockSettingsHeader>
    </div>
  );
};

const MockSettingsHeader = ({ 
  children, 
  title, 
  description 
}: { 
  children: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="settings-header">
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

const MockLicenseRequired = ({ children }: { children: React.ReactNode }) => (
  <div className="license-required">
    {children}
  </div>
);

// Mock implementations
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => (key: string) => key,
};

// Mock modules
if (typeof jest !== 'undefined') {
  jest.mock("app/_utils", () => mockUtils);
  jest.mock("@calcom/features/ee/common/components/LicenseRequired", () => MockLicenseRequired);
  jest.mock("@calcom/features/ee/organizations/pages/settings/admin/WorkspacePlatformPage", () => MockWorkspacePlatformsPage);
  jest.mock("@calcom/features/settings/appDir/SettingsHeader", () => MockSettingsHeader);
}

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <ErrorBoundary>
      <MockLicenseRequired>
        <MockWorkspacePlatformsPage />
      </MockLicenseRequired>
    </ErrorBoundary>
  );
}

// Error Boundary Component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    return (
      <div className="error-boundary">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );
  }
}