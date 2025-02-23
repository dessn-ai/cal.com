import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetContent, SheetTrigger } from '../../../../packages/ui/components/sheet/Sheet';

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
        <div>Sheet Content</div>
      </SheetContent>
    </Sheet>
  );
}