import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetClose } from '../../../../packages/ui/components/sheet/Sheet';


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
    <SheetClose className={state.className.value}>
      {state.children.value}
    </SheetClose>
  );
}