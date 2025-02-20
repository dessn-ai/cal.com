import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetFooterControls } from '../../../../packages/features/users/components/UserTable/EditSheet/SheetFooterControls';
import { useEditMode } from '../../../../packages/features/users/components/UserTable/EditSheet/store';
import { Sheet, SheetContent, SheetFooter } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editMode: {
      type: "boolean",
      value: false,
      label: "Edit Mode",
    },
  });

  // Set the edit mode when the component mounts
  React.useEffect(() => {
    useEditMode.getState().setEditMode(state.editMode.value);
  }, [state.editMode.value]);

  return (
    <Sheet open={true}>
      <SheetContent>
        <SheetFooter>
          <SheetFooterControls />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}