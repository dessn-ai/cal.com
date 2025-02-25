import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamMembersForm } from '../../../../packages/features/ee/teams/components/AddNewTeamMembers';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  const form = useForm();

  // Mock organization branding data
  const mockOrgBrand = {
    orgBrand: {
      id: 1,
      slug: 'test-org',
      fullDomain: 'test-org.cal.com',
      domainSuffix: 'cal.com',
      role: 'OWNER',
    }
  };

  return (
    <OrgBrandingProvider value={mockOrgBrand}>
      <AddNewTeamMembersForm
        teamId={state.teamId.value}
        isOrg={state.isOrg.value}
      />
    </OrgBrandingProvider>
  );
}