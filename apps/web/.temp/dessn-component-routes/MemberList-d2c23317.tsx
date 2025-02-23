import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MemberList';


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

  return (
    <ImportedComponent
      team={team}
      isOrgAdminOrOwner={isOrgAdminOrOwner}
      setShowMemberInvitationModal={setShowMemberInvitationModal}
    />
  );
}