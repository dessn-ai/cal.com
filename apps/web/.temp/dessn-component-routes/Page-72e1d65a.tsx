import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/[id]/profile/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => Promise.resolve((key) => key)),
}));

jest.mock('@calcom/features/ee/organizations/pages/settings/other-team-profile-view', () => {
  return function MockLegacyPage() {
    return <div>Mock Legacy Page</div>;
  };
});

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }) {
    return <div>Mock Settings Header {children}</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <ImportedComponent />;
}