import React from 'react';
import { useParentState } from '../useIframeState';
import { ImpersonationMemberModal } from '../../../../packages/features/users/components/UserTable/ImpersonationMemberModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    impersonateMember: {
      type: "dropdown",
      value: "show",
      options: ["show", "hide"],
      label: "Show Modal",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    email: {
      type: "string",
      value: "johndoe@example.com",
      label: "Email",
    },
  });

  const mockState: UserTableState = {
    changeMemberRole: { showModal: false },
    deleteMember: { showModal: false },
    inviteMember: { showModal: false },
    editSheet: { showModal: false },
    impersonateMember: {
      showModal: state.impersonateMember.value === "show",
      user: state.impersonateMember.value === "show" ? {
        id: state.userId.value,
        username: state.username.value,
        email: state.email.value,
        timeZone: "UTC",
        role: "MEMBER",
        avatarUrl: null,
        accepted: true,
        disableImpersonation: false,
        completedOnboarding: true,
        lastActiveAt: new Date().toISOString(),
        teams: [],
        attributes: [],
      } : undefined,
    },
  };

  const mockDispatch: React.Dispatch<UserTableAction> = (action) => {
    if (action.type === "CLOSE_MODAL") {
      setState("impersonateMember", "hide");
    }
  };

  return (
    <ImpersonationMemberModal
      state={mockState}
      dispatch={mockDispatch}
    />
  );
}