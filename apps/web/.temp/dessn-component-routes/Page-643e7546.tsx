import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/impersonation/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-settings-header">{children}</div>;
  };
});

jest.mock('~/settings/admin/impersonation-view', () => {
  return function MockImpersonationView() {
    return <div data-testid="mock-impersonation-view">Impersonation View</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <ImportedComponent />;
}