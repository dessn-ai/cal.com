import React from 'react';
import { useParentState } from '../useIframeState';
import { ChangeUserRoleModal } from '../../../../packages/features/users/components/UserTable/ChangeUserRoleModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showModal: {
      type: "boolean",
      value: true,
      label: "Show Modal",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    userRole: {
      type: "dropdown",
      value: "MEMBER",
      options: ["MEMBER", "ADMIN", "OWNER"],
      label: "User Role",
    },
  });

  const mockState: UserTableState = {
    changeMemberRole: {
      showModal: state.showModal.value,
      user: {
        id: state.userId.value,
        username: "testuser",
        email: "test@example.com",
        timeZone: "UTC",
        role: state.userRole.value as MembershipRole,
        avatarUrl: null,
        accepted: true,
        disableImpersonation: false,
        completedOnboarding: true,
        lastActiveAt: new Date().toISOString(),
        teams: [],
        attributes: [],
      },
    },
    deleteMember: { showModal: false },
    impersonateMember: { showModal: false },
    inviteMember: { showModal: false },
    editSheet: { showModal: false },
  };

  const mockDispatch: Dispatch<UserTableAction> = (action) => {
    if (action.type === "CLOSE_MODAL") {
      setState("showModal", false);
    }
  };

  return <ChangeUserRoleModal state={mockState} dispatch={mockDispatch} />;
}