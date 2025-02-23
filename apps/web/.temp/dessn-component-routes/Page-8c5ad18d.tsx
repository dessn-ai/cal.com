import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/add/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/ee/users/pages/users-add-view', () => {
  return function MockUsersAddView() {
    return <div>Mock UsersAddView</div>;
  };
});

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>Mock SettingsHeader {children}</div>;
  };
});

export default function ComponentPreview() {
  return <ImportedComponent />;
}