import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/appearance/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => Promise.resolve((key) => key)),
}));

jest.mock('@calcom/features/ee/teams/pages/team-appearance-view', () => {
  return function MockLegacyPage() {
    return <div>Mock Legacy Page</div>;
  };
});

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children, title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    );
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <ImportedComponent />;
}