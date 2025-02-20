import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components to prevent dependency issues
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="mock-settings-header">{children}</div>;
};

const MockImpersonationView = () => {
  return <div data-testid="mock-impersonation-view">Impersonation View</div>;
};

// Mock component to handle the actual page import
const MockImportedComponent = () => {
  return (
    <div className="admin-impersonation-page">
      <MockSettingsHeader>
        <h2>Impersonation Settings</h2>
      </MockSettingsHeader>
      <MockImpersonationView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Default state if needed
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-container">
        <MockImportedComponent />
      </div>
    </Suspense>
  );
}