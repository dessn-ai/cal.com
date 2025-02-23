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

  // Initialize the edit mode state
  React.useEffect(() => {
    useEditMode.setState({ editMode: state.editMode.value });
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