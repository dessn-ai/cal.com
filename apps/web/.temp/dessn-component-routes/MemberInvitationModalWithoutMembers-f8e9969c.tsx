import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MemberInvitationModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showMemberInvitationModal: {
      type: "boolean",
      value: true,
      label: "Show Modal",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    token: {
      type: "string",
      value: "sample-token",
      label: "Token",
    },
  });

  return (
    <ImportedComponent
      hideInvitationModal={() => setState("showMemberInvitationModal", false)}
      showMemberInvitationModal={state.showMemberInvitationModal.value}
      teamId={state.teamId.value}
      token={state.token.value}
      onSettingsOpen={() => console.log("Settings opened")}
    />
  );
}