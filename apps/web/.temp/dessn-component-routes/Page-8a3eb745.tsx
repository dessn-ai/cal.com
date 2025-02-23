import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockDomainWideDelegationList = () => {
  return <div>Mock DomainWideDelegation List Component</div>;
};

const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mock-settings-header">
      <h1>Mock Settings Header</h1>
      {children}
    </div>
  );
};

// Mock the modules directly
const mockUtils = {
  getTranslate: () => (key: string) => key,
};

// Override imports with mock components
import('app/_utils').then(() => mockUtils);
import('@calcom/features/ee/organizations/pages/settings/domainWideDelegation').then(() => ({
  default: MockDomainWideDelegationList,
}));
import('@calcom/features/settings/appDir/SettingsHeader').then(() => ({
  default: MockSettingsHeader,
}));

const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/domain-wide-delegation/page')
    .catch(() => ({
      default: () => (
        <div>
          <MockSettingsHeader>
            <MockDomainWideDelegationList />
          </MockSettingsHeader>
        </div>
      ),
    }))
);

export default function ComponentPreview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </Suspense>
  );
}