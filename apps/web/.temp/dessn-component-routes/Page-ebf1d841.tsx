import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockLegacyPage = () => <div>Mock Legacy Page</div>;
const MockSettingsHeader = ({ children }) => <div>Mock Settings Header {children}</div>;
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => Promise.resolve((key) => key),
};

// Mock the modules by overriding the imports
const mockModules = {
  '@calcom/features/ee/teams/pages/team-members-view': MockLegacyPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': mockUtils,
};

// Create a wrapped version of the imported component that uses mocks
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/members/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </Suspense>
  );
}