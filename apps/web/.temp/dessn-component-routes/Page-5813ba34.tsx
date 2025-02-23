import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/out-of-office/page';


// Mock the necessary dependencies
jest.mock("app/_utils", () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock("@calcom/features/settings/appDir/SettingsHeader", () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div data-testid="settings-header">{children}</div>;
  };
});

jest.mock("@calcom/features/settings/outOfOffice/CreateNewOutOfOfficeEntryButton", () => {
  return function MockCreateNewOutOfOfficeEntryButton() {
    return <button data-testid="add_entry_ooo">Add Entry</button>;
  };
});

jest.mock("@calcom/features/settings/outOfOffice/OutOfOfficeEntriesList", () => {
  return {
    OutOfOfficeEntriesList: function MockOutOfOfficeEntriesList() {
      return <div data-testid="out-of-office-entries-list">Entries List</div>;
    },
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return <ImportedComponent />;
}