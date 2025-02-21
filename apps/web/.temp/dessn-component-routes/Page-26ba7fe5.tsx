import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components to prevent dependency issues
const MockLegacyPage = () => <div>LegacyPage</div>;
const MockSettingsHeader = ({ children }) => <div>{children}</div>;
const MockLayout = ({ children }) => <div>{children}</div>;

// Mock metadata generator
const mockGenerateMetadata = () => ({
  title: 'Mock Title',
  description: 'Mock Description'
});

// Mock translate function
const mockTranslate = (key) => key;

// Mock the modules at the top level
jest.mock('@calcom/features/ee/organizations/pages/members', () => MockLegacyPage);
jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => MockSettingsHeader);
jest.mock('app/(use-page-wrapper)/settings/(settings-layout)/layout', () => MockLayout);
jest.mock('app/_utils', () => ({
  _generateMetadata: mockGenerateMetadata,
  getTranslate: () => Promise.resolve(mockTranslate),
}));

// Wrap the imported component in a try-catch to handle potential import errors
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/organizations/members/page')
  .catch(() => ({
    default: () => <div>Error loading component</div>
  }))
);

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
      <div className={state.containerClassName.value}>
        <ImportedComponent />
      </div>
    </Suspense>
  );
}