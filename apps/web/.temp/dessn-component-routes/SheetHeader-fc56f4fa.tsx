import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetHeader } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showCloseButton: {
      type: "boolean",
      value: true,
      label: "Show Close Button"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <Sheet defaultOpen>
      <SheetHeader 
        showCloseButton={state.showCloseButton.value}
        className={state.className.value}
      >
        <div>Sample Header Content</div>
      </SheetHeader>
    </Sheet>
  );
}