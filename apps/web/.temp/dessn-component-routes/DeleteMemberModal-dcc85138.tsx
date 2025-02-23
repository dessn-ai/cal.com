import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteMemberModal } from '../../../../packages/features/users/components/UserTable/DeleteMemberModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    deleteMember: {
      type: 'object',
      value: {
        showModal: true,
        user: {
          id: 1,
          username: 'johndoe',
          email: 'john@example.com',
          timeZone: 'UTC',
          role: 'MEMBER',
          avatarUrl: null,
          accepted: true,
          disableImpersonation: false,
          completedOnboarding: true,
          lastActiveAt: '2023-06-01T12:00:00Z',
          teams: [{ id: 1, name: 'Team A', slug: 'team-a' }],
          attributes: []
        }
      },
      label: 'Delete Member State'
    }
  });

  const mockDispatch = React.useCallback(() => {}, []);

  const mockState = {
    changeMemberRole: { showModal: false },
    deleteMember: state.deleteMember.value,
    impersonateMember: { showModal: false },
    inviteMember: { showModal: false },
    editSheet: { showModal: false }
  };

  return (
    <DeleteMemberModal
      state={mockState}
      dispatch={mockDispatch}
    />
  );
}