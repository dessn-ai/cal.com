import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/admin-api/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => (key: string) => key),
  _generateMetadata: jest.fn(),
}));

jest.mock('@calcom/features/ee/organizations/pages/settings/admin-api', () => ({
  AdminAPIView: () => <div>AdminAPIView Mock</div>,
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>SettingsHeader Mock {children}</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <ImportedComponent />;
}