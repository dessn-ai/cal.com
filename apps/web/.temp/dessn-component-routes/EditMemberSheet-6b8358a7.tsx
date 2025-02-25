import React from 'react';
import { useParentState } from '../useIframeState';
import { EditMemberSheet } from '../../../../packages/features/ee/teams/components/EditMemberSheet';

import { useForm } from 'react-hook-form';

const MembershipRole = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER',
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    currentMember: {
      type: "dropdown",
      value: MembershipRole.MEMBER,
      options: Object.values(MembershipRole),
      label: "Current Member Role",
    },
  });

  const mockState = {
    editSheet: {
      showModal: true,
      user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatarUrl: "https://example.com/avatar.jpg",
        role: MembershipRole.MEMBER,
        bio: "A mock user bio",
        username: "johndoe",
        bookerUrl: "https://cal.com",
      },
    },
    deleteMember: { showModal: false },
    impersonateMember: { showModal: false },
    teamAvailability: { showModal: false },
  };

  const mockDispatch = (action: any) => {
    console.log("Dispatch action:", action);
  };

  return (
    <EditMemberSheet
      state={mockState}
      dispatch={mockDispatch}
      currentMember={state.currentMember.value}
      teamId={state.teamId.value}
    />
  );
}