import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="mock-settings-header">{children}</div>;
};

const MockApiKeysView = () => {
  return <div data-testid="mock-api-keys-view">API Keys View</div>;
};

const MockNewApiKeyButton = () => {
  return <button data-testid="mock-new-api-key-button">New API Key</button>;
};

// Mock implementations
const mockTranslate = (key: string) => key;

// Create a mock component that represents the imported page
const MockImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <h1>API Keys</h1>
      </MockSettingsHeader>
      <MockApiKeysView />
      <MockNewApiKeyButton />
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockImportedComponent />
    </Suspense>
  );
}