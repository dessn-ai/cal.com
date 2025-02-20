import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/security/impersonation/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => ({
    impersonation: 'Impersonation',
    impersonation_description: 'Impersonation Description'
  }))
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }) {
    return <div>{children}</div>;
  };
});

jest.mock('~/settings/security/impersonation-view', () => {
  return function MockProfileImpersonationViewWrapper() {
    return <div>ProfileImpersonationViewWrapper</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}