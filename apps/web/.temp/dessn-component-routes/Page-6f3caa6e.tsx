import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="settings-header">{children}</div>
);

const MockLockedSMSPage = () => {
  return (
    <div className="locked-sms-container">
      <MockSettingsHeader>
        <h1>Locked SMS Settings</h1>
      </MockSettingsHeader>
      <div className="locked-sms-content">
        <div>Locked SMS View Content</div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-container">
      <MockLockedSMSPage />
    </div>
  );
}