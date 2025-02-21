import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetContent, SheetClose } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Close Sheet",
      label: "Button Text",
    },
  });

  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetClose className={state.className.value}>
          {state.children.value}
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}