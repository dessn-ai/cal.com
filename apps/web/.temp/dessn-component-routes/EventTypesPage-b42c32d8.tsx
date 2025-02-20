import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/event-types/views/event-types-listing-view';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const mockOrgBranding = {
    orgBrand: {
      id: 1,
      name: "Test Organization",
      slug: "test-org",
      logoUrl: null,
      fullDomain: "test-org.cal.com",
      domainSuffix: "cal.com",
      role: "OWNER",
      theme: null,
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      metadata: {}
    }
  };

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <ImportedComponent />
    </OrgBrandingProvider>
  );
}