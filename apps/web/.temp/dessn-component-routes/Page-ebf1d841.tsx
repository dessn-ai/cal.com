import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const MockLegacyPage = () => <div>Mock Legacy Page</div>;
const MockSettingsHeader = ({ children }) => <div>Mock Settings Header {children}</div>;
const MockI18nProvider = ({ children }) => <>{children}</>;
const MockDialog = ({ children }) => <div className="mock-dialog">{children}</div>;

// Mock modules as direct imports
const mockMetadata = {
  _generateMetadata: () => ({}),
  getTranslate: () => Promise.resolve((key) => key),
};

// Create a mock UI object
const mockUI = {
  Dialog: MockDialog,
  Button: ({ children }) => <button>{children}</button>,
  showToast: () => {},
};

// Mock the imported component
const ImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <h1>Team Members</h1>
      </MockSettingsHeader>
      <MockLegacyPage />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockI18nProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </MockI18nProvider>
  );
}

// Export mocked modules for other components to use
export const mockedModules = {
  '@calcom/ui': mockUI,
  '@calcom/features/i18n': { I18nProvider: MockI18nProvider },
  '@calcom/ui/components/dialog/Dialog': { Dialog: MockDialog },
  'app/_utils': mockMetadata,
};