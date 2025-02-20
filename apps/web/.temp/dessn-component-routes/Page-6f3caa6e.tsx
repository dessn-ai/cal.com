import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/lockedSMS/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  };
});

jest.mock('~/settings/admin/locked-sms-view', () => {
  return function MockLockedSMSView() {
    return <div>Locked SMS View</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}