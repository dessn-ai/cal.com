import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/developer/api-keys/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => (key: string) => key),
  _generateMetadata: jest.fn(),
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  };
});

jest.mock('~/settings/developer/api-keys-view', () => ({
  __esModule: true,
  default: function MockApiKeysView() {
    return <div>API Keys View</div>;
  },
  NewApiKeyButton: function MockNewApiKeyButton() {
    return <button>New API Key</button>;
  },
}));

export default function ComponentPreview() {
  const [state] = useParentState({});

  return <ImportedComponent />;
}