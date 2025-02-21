import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockLegacyPage = () => <div>Mock Legacy Page</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Mock Settings Header {children}</div>
);

// Mock the imported component directly
const ImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <MockLegacyPage />
      </MockSettingsHeader>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </Suspense>
  );
}