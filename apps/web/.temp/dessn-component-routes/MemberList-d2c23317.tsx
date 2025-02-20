import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MemberList';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Team",
        membership: { role: "OWNER", accepted: true },
        isOrganization: false
      }),
      label: "Team"
    },
    isOrgAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Org Admin or Owner"
    }
  });

  const team = JSON.parse(state.team.value);
  const isOrgAdminOrOwner = state.isOrgAdminOrOwner.value;

  const setShowMemberInvitationModal = React.useCallback(() => {
    console.log("setShowMemberInvitationModal called");
  }, []);

  // Mock organization branding data
  const orgBrandingValue = {
    orgBrand: {
      id: 1,
      name: "Sample Organization",
      slug: "sample-org",
      logoUrl: null,
      fullDomain: "sample-org.cal.com",
      domainSuffix: "cal.com",
      role: "OWNER"
    }
  };

  return (
    <OrgBrandingProvider value={orgBrandingValue}>
      <ImportedComponent
        team={team}
        isOrgAdminOrOwner={isOrgAdminOrOwner}
        setShowMemberInvitationModal={setShowMemberInvitationModal}
      />
    </OrgBrandingProvider>
  );
}