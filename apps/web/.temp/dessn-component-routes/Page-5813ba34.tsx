import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const SettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="settings-header">{children}</div>
);

const CreateNewOutOfOfficeEntryButton = () => (
  <button data-testid="add_entry_ooo">Add Entry</button>
);

const OutOfOfficeEntriesList = () => (
  <div data-testid="out-of-office-entries-list">Entries List</div>
);

// Mock the actual imports using require.cache
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__mocks = {
    "@calcom/features/settings/appDir/SettingsHeader": SettingsHeader,
    "@calcom/features/settings/outOfOffice/CreateNewOutOfOfficeEntryButton": CreateNewOutOfOfficeEntryButton,
    "@calcom/features/settings/outOfOffice/OutOfOfficeEntriesList": {
      OutOfOfficeEntriesList: OutOfOfficeEntriesList
    },
    "app/_utils": {
      _generateMetadata: () => ({
        title: "Out of Office",
        description: "Out of Office settings"
      }),
      getTranslate: () => (key: string) => key,
    }
  };
}

// Create a mock component that includes all the mocked dependencies
const MockedComponent = () => {
  return (
    <div className="out-of-office-page">
      <SettingsHeader>
        <h2>Out of Office</h2>
      </SettingsHeader>
      <div className="content">
        <CreateNewOutOfOfficeEntryButton />
        <OutOfOfficeEntriesList />
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockedComponent />
    </Suspense>
  );
}