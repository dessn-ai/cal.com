import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const mockUtils = {
  _generateMetadata: () => ({
    title: 'Mock Title',
    description: 'Mock Description'
  }),
  getTranslate: () => Promise.resolve((key) => key)
};

// Create mock components with proper types
const MockLegacyPage: React.FC = () => <div>LegacyPage</div>;
const MockSettingsHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
const MockLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

// Mock the actual component to avoid import issues
const MockImportedComponent: React.FC = () => {
  return (
    <MockLayout>
      <MockSettingsHeader>
        <MockLegacyPage />
      </MockSettingsHeader>
    </MockLayout>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    containerClassName: {
      type: "string",
      value: "lg:max-w-screen-2xl",
      label: "Container Class Name",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockImportedComponent />
    </Suspense>
  );
}