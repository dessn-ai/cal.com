import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/profile/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/ee/organizations/pages/settings/profile', () => {
  return function MockLegacyPage() {
    return <div>Mock Legacy Page</div>;
  };
});

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>Mock Settings Header {children}</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}