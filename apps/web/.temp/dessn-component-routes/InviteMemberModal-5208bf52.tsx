import React from 'react';
import { useParentState } from '../useIframeState';
import { InviteMemberModal } from '../../../../packages/features/users/components/UserTable/InviteMemberModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showModal: {
      type: "boolean",
      value: true,
      label: "Show Modal",
    },
  });

  const mockDispatch = (action: any) => {
    console.log('Dispatched action:', action);
    if (action.type === 'CLOSE_MODAL') {
      setState('showModal', false);
    }
  };

  if (!state.showModal.value) {
    return null;
  }

  return (
    <InviteMemberModal
      dispatch={mockDispatch}
    />
  );
}