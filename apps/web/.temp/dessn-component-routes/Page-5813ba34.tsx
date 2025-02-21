import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock providers and components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="settings-header">{children}</div>
);

const MockCreateNewOutOfOfficeEntryButton = () => (
  <button data-testid="add_entry_ooo">Add Entry</button>
);

const MockOutOfOfficeEntriesList = () => (
  <div data-testid="out-of-office-entries-list">Entries List</div>
);

// Mock translations
const mockT = (key: string) => key;

// Create mock metadata generator
const mockGenerateMetadata = () => ({
  title: 'Out of Office',
  description: 'Manage your out of office settings',
});

// Mock the actual component to prevent import issues
const MockImportedComponent = () => {
  return (
    <div className="w-full">
      <MockSettingsHeader>
        <h2>Out of Office</h2>
      </MockSettingsHeader>
      <div className="mt-6 flex flex-col gap-6">
        <MockCreateNewOutOfOfficeEntryButton />
        <MockOutOfOfficeEntriesList />
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
      <MockImportedComponent />
    </Suspense>
  );
}