import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/billing/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: jest.fn(() => (key: string) => key),
}));

jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => {
  return function MockSettingsHeader({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  };
});

jest.mock('~/settings/billing/billing-view', () => {
  return function MockBillingView() {
    return <div>Billing View</div>;
  };
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}