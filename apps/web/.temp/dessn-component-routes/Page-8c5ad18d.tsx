import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockUsersAddView = () => <div>Mock UsersAddView</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Mock SettingsHeader {children}</div>
);

// Mock translations
const mockTranslate = (key: string) => key;

// Override imports with mocks
const mockModules = {
  '@calcom/features/ee/users/pages/users-add-view': MockUsersAddView,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': {
    getTranslate: () => mockTranslate,
  }
};

// Wrap the import in a try-catch and use dynamic import
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/add/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

export default function ComponentPreview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mock-environment">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}