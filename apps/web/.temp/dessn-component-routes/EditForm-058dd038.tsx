import React from 'react';
import { useParentState } from '../useIframeState';
import { EditForm } from '../../../../packages/features/users/components/UserTable/EditSheet/EditUserForm';
import { Dialog, DialogContent } from "@calcom/ui";
import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedUser: {
      type: "dropdown",
      value: "user1",
      options: ["user1", "user2", "user3"],
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

  const mockSelectedUser = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    timeZone: "America/New_York",
    role: MembershipRole.MEMBER,
    avatarUrl: state.avatarUrl.value,
    accepted: true,
    disableImpersonation: false,
    completedOnboarding: true,
    lastActiveAt: new Date().toISOString(),
    teams: [],
    attributes: [],
  };

  const mockDispatch = (action: any) => {
    console.log("Dispatched action:", action);
  };

  return (
    <Dialog defaultOpen={true}>
      <DialogContent>
        <EditForm
          selectedUser={mockSelectedUser}
          avatarUrl={state.avatarUrl.value}
          domainUrl={state.domainUrl.value}
          dispatch={mockDispatch}
        />
      </DialogContent>
    </Dialog>
  );
}