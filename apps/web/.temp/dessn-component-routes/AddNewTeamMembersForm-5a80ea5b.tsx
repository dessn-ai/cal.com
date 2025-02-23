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

  // Minimal mock data required by OrgBrandingProvider
  const orgBranding = {
    theme: null,
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    logo: "",
    name: "Test Organization"
  };

  return (
    <div className="w-full">
      <OrgBrandingProvider orgBranding={orgBranding}>
        <AddNewTeamMembersForm
          teamId={state.teamId.value}
          isOrg={state.isOrg.value}
        />
      </OrgBrandingProvider>
    </div>
  );
}