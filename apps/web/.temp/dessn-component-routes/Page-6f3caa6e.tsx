import React from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and utilities
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="mock-settings-header">{children}</div>;
};

const MockLockedSMSView = () => {
  return <div data-testid="mock-locked-sms-view">Locked SMS View</div>;
};

// Mock translations
const mockTranslate = (key: string) => key;

// Create a mock component that represents the imported page
const MockImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <h1>Locked SMS Settings</h1>
      </MockSettingsHeader>
      <MockLockedSMSView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-container">
      <MockImportedComponent />
    </div>
  );
}