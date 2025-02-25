import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MemberChangeRoleModal';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    },
    currentMember: {
      type: "dropdown",
      value: "MEMBER",
      options: ["MEMBER", "ADMIN", "OWNER"],
      label: "Current Member Role"
    },
    memberId: {
      type: "number",
      value: 1,
      label: "Member ID"
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID"
    },
    initialRole: {
      type: "dropdown",
      value: "MEMBER",
      options: ["MEMBER", "ADMIN", "OWNER"],
      label: "Initial Role"
    },
    searchTerm: {
      type: "string",
      value: "",
      label: "Search Term"
    }
  });

  return (
    <ImportedComponent
      isOpen={state.isOpen.value}
      currentMember={state.currentMember.value as MembershipRole}
      memberId={state.memberId.value}
      teamId={state.teamId.value}
      initialRole={state.initialRole.value as MembershipRole}
      onExit={() => console.log("Exit called")}
      searchTerm={state.searchTerm.value}
    />
  );
}