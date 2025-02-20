import React from 'react';
import { useParentState } from '../useIframeState';
import { EditForm } from '../../../../packages/features/users/components/UserTable/EditSheet/EditUserForm';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedUser: {
      type: "object",
      value: {
        teams: [{ accepted: true, name: "Team 1", id: 1 }],
        role: MembershipRole.MEMBER,
        name: "John Doe",
        id: 1,
        email: "john@example.com",
        username: "johndoe",
        bio: "A short bio",
        avatarUrl: "https://example.com/avatar.jpg",
        timeZone: "America/New_York",
        schedules: [{ name: "Default Schedule", id: 1 }],
      },
      label: "Selected User",
    },
    avatarUrl: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
    domainUrl: {
      type: "string",
      value: "https://example.com",
      label: "Domain URL",
    },
  });

  const mockDispatch = (action: any) => {
    console.log('Dispatched action:', action);
  };

  return (
    <EditForm
      selectedUser={state.selectedUser.value}
      avatarUrl={state.avatarUrl.value}
      domainUrl={state.domainUrl.value}
      dispatch={mockDispatch}
    />
  );
}