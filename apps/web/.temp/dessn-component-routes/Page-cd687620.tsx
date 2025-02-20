import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockOrgSSOView = () => <div>Mock OrgSSOView</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Settings Header {children}</div>
);

// Create a simplified version of the imported component
const SimplifiedImportedComponent = () => {
  return (
    <div className="mx-auto max-w-4xl py-8">
      <MockSettingsHeader>
        <h2>SSO Configuration</h2>
      </MockSettingsHeader>
      <MockOrgSSOView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-wrapper">
        <SimplifiedImportedComponent />
      </div>
    </Suspense>
  );
}