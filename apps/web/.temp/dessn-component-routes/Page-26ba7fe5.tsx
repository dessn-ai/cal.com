import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/organizations/members/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => Promise.resolve((key) => key)),
}));

jest.mock('@calcom/features/ee/organizations/pages/members', () => () => <div>LegacyPage</div>);
jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => ({ children }) => <div>{children}</div>);
jest.mock('app/(use-page-wrapper)/settings/(settings-layout)/layout', () => ({ children }) => <div>{children}</div>);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    containerClassName: {
      type: "string",
      value: "lg:max-w-screen-2xl",
      label: "Container Class Name",
    },
  });

  return <ImportedComponent />;
}