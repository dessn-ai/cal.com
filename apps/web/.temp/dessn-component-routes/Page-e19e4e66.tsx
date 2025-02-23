import React from 'react';
import { useParentState } from '../useIframeState';

// Create mock components that would normally be imported
const MockOrgSettingsAttributesPage = () => {
  return <div>Mock OrgSettingsAttributesPage</div>;
};

const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>Mock SettingsHeader {children}</div>;
};

const mockTranslate = (key: string) => key;

// Mock the imported component directly
const MockImportedComponent = () => {
  try {
    return (
      <div>
        <MockSettingsHeader>
          <h1>Organization Attributes</h1>
        </MockSettingsHeader>
        <MockOrgSettingsAttributesPage />
      </div>
    );
  } catch (error) {
    console.error('Error rendering component:', error);
    return <div>Error: Failed to render component</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  try {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MockImportedComponent />
      </React.Suspense>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error: Failed to load preview</div>;
  }
}