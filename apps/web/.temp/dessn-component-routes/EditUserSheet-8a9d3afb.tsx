import React from 'react';
import { useParentState } from '../useIframeState';
import { EditUserSheet } from '../../../../packages/features/users/components/UserTable/EditSheet/EditUserSheet';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editSheet: {
      type: "object",
      value: {
        showModal: true,
        user: {
          id: 1,
          username: "johndoe",
          email: "john@example.com",
          timeZone: "America/New_York",
          role: "MEMBER",
          avatarUrl: null,
          accepted: true,
          disableImpersonation: false,
          completedOnboarding: true,
          lastActiveAt: new Date().toISOString(),
          teams: [
            { id: 1, name: "Team A", slug: "team-a" },
            { id: 2, name: "Team B", slug: "team-b" }
          ],
          attributes: [
            {
              id: "1",
              attributeId: "attr1",
              value: "Value 1",
              slug: "value-1",
              weight: 1,
              contains: ["value1"]
            }
          ]
        }
      },
      label: "Edit Sheet State"
    }
  });

  const mockDispatch = React.useCallback(() => {
    console.log("Dispatch called");
  }, []);

  return (
    <EditUserSheet
      state={{
        changeMemberRole: { showModal: false },
        deleteMember: { showModal: false },
        impersonateMember: { showModal: false },
        inviteMember: { showModal: false },
        editSheet: state.editSheet.value
      }}
      dispatch={mockDispatch}
    />
  );
}