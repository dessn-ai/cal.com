import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="settings-header">{children}</div>
);

const MockAdminAppsList = () => (
  <div className="admin-apps-list">Admin Apps List Mock</div>
);

// Mock page component instead of importing
const MockPageComponent = () => {
  return (
    <div className="admin-apps-page">
      <MockSettingsHeader>
        <h2>App Store Settings</h2>
      </MockSettingsHeader>
      <div className="main-content">
        <MockAdminAppsList />
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-wrapper">
      <MockPageComponent />
    </div>
  );
}