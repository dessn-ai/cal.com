import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/organizations/page';


// Mock the necessary dependencies
jest.mock("app/_utils", () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock("@calcom/features/ee/common/components/LicenseRequired", () => {
  return ({ children }: { children: React.ReactNode }) => <>{children}</>;
});

jest.mock("@calcom/features/ee/organizations/pages/settings/admin/AdminOrgPage", () => {
  return () => <div>AdminOrgTable Mock</div>;
});

jest.mock("@calcom/features/settings/appDir/SettingsHeader", () => {
  return ({ children, title, description }: { children: React.ReactNode; title: string; description: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
});

export default function ComponentPreview() {
  // Since the component doesn't have any props, we don't need to use useParentState
  return <ImportedComponent />;
}