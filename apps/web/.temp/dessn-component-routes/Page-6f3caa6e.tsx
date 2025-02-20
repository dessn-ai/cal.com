import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-settings-header">{children}</div>
);

const MockLockedSMSView = () => (
  <div data-testid="mock-locked-sms-view">Locked SMS View</div>
);

// Mock translate function
const mockTranslate = (key: string) => key;

// Create a mock component that represents the imported page
const MockImportedComponent = () => {
  return (
    <div className="flex flex-col gap-6">
      <MockSettingsHeader>
        <h2>Locked SMS Settings</h2>
      </MockSettingsHeader>
      <MockLockedSMSView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen w-full flex-col">
        <MockImportedComponent />
      </div>
    </Suspense>
  );
}

// Export mocked modules for global usage
export const mockModules = {
  'app/_utils': {
    getTranslate: () => mockTranslate,
  },
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  '~/settings/admin/locked-sms-view': MockLockedSMSView,
};