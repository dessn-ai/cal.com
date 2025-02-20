import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/sso/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/ee/sso/page/orgs-sso-view', () => {
  return function MockOrgSSOView() {
    return <div>Mock OrgSSOView</div>;
  };
});

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>Mock SettingsHeader {children}</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}