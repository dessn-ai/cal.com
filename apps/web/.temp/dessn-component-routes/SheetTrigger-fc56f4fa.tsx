import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Open Sheet",
      label: "Button Text",
    },
  });

  return (
    <Sheet>
      <SheetTrigger className={state.className.value}>
        {state.children.value}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet dialog demonstration
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}