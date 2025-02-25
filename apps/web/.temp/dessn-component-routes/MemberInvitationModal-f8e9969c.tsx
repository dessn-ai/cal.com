import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MemberInvitationModal';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    disableCopyLink: {
      type: "boolean",
      value: false,
      label: "Disable Copy Link",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
    checkMembershipMutation: {
      type: "boolean",
      value: false,
      label: "Check Membership Mutation",
    },
  });

  const mockOnExit = () => {
    console.log("Modal closed");
  };

  const mockOnSubmit = (values: any, resetFields: () => void) => {
    console.log("Form submitted with values:", values);
    resetFields();
  };

  const mockOnSettingsOpen = () => {
    console.log("Settings opened");
  };

  return (
    <ImportedComponent
      isOpen={state.isOpen.value}
      onExit={mockOnExit}
      onSubmit={mockOnSubmit}
      onSettingsOpen={mockOnSettingsOpen}
      teamId={state.teamId.value}
      isPending={state.isPending.value}
      disableCopyLink={state.disableCopyLink.value}
      isOrg={state.isOrg.value}
      checkMembershipMutation={state.checkMembershipMutation.value}
    />
  );
}