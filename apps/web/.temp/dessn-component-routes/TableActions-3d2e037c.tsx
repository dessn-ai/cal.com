import React from 'react';
import { useParentState } from '../useIframeState';
import { TableActions } from '../../../../packages/features/users/components/UserTable/UserTableActions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        username: "johndoe",
        email: "john@example.com",
        timeZone: "UTC",
        role: "MEMBER",
        avatarUrl: "https://example.com/avatar.jpg",
        accepted: true,
        disableImpersonation: false,
        completedOnboarding: true,
        lastActiveAt: "2023-06-01T12:00:00Z",
        teams: [{ id: 1, name: "Team A", slug: "team-a" }],
        attributes: []
      }),
      label: "User"
    },
    domain: {
      type: "string",
      value: "https://example.com",
      label: "Domain"
    },
    canEdit: {
      type: "boolean",
      value: true,
      label: "Can Edit"
    },
    canRemove: {
      type: "boolean",
      value: true,
      label: "Can Remove"
    },
    canImpersonate: {
      type: "boolean",
      value: true,
      label: "Can Impersonate"
    },
    canResendInvitation: {
      type: "boolean",
      value: true,
      label: "Can Resend Invitation"
    }
  });

  const user = JSON.parse(state.user.value);
  const permissionsForUser = {
    canEdit: state.canEdit.value,
    canRemove: state.canRemove.value,
    canImpersonate: state.canImpersonate.value,
    canResendInvitation: state.canResendInvitation.value
  };

  const dispatch = (action: any) => {
    console.log('Dispatched action:', action);
  };

  return (
    <TableActions
      user={user}
      dispatch={dispatch}
      domain={state.domain.value}
      permissionsForUser={permissionsForUser}
    />
  );
}