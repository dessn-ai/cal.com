import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/new/create-new-team-view';
import { WizardLayout } from '@calcom/ui';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    returnTo: {
      type: "string",
      value: "/teams",
      label: "Return To URL",
    },
    slug: {
      type: "string",
      value: "my-team",
      label: "Team Slug",
    },
  });

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
      logo: "",
      logoUrl: "",
    }
  };

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <WizardLayout currentStep={1} maxSteps={3}>
        <ImportedComponent />
      </WizardLayout>
    </OrgBrandingProvider>
  );
}