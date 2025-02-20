import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetFooterControls } from '../../../../packages/features/users/components/UserTable/EditSheet/SheetFooterControls';

import { EditModeProvider } from '../../../../packages/features/users/components/UserTable/EditSheet/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editMode: {
      type: "boolean",
      value: false,
      label: "Edit Mode",
    },
  });

  return (
    <EditModeProvider initialState={{ editMode: state.editMode.value }}>
      <SheetFooterControls />
    </EditModeProvider>
  );
}