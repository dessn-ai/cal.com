import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mock-settings-header">{children}</div>
);

const MockFlagListingView = () => (
  <div className="mock-flag-listing">
    <h2>Feature Flags</h2>
    <div className="flag-list">
      <div className="flag-item">
        <h3>Example Flag</h3>
        <p>Description: This is an example feature flag</p>
        <div className="flag-controls">
          <label>
            <input type="checkbox" /> Enabled
          </label>
        </div>
      </div>
    </div>
  </div>
);

// Mock the actual page component instead of importing it
const MockFlagsPage = () => {
  return (
    <div className="settings-layout">
      <MockSettingsHeader>
        <h1>Feature Flags</h1>
      </MockSettingsHeader>
      <div className="settings-content">
        <MockFlagListingView />
      </div>
    </div>
  );
};

const ComponentPreview = () => {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-container">
      <MockFlagsPage />
    </div>
  );
};

export default ComponentPreview;