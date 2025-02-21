import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and utilities
const MockLegacyPage = () => <div>Mock Legacy Page</div>;
const MockSettingsHeader = ({ children }) => <div>Mock Settings Header {children}</div>;

// Create a mock version of the imported component
const MockImportedComponent = () => {
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
    <Suspense fallback={<div>Loading...</div>}>
      <MockImportedComponent />
    </Suspense>
  );
}