import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/profile/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-settings-header">{children}</div>;
  };
});

jest.mock('~/settings/my-account/profile-view', () => {
  return function MockProfileView() {
    return <div data-testid="mock-profile-view">Profile View</div>;
  };
});

export default function ComponentPreview() {
  const [state] = useParentState({});

  return <ImportedComponent />;
}