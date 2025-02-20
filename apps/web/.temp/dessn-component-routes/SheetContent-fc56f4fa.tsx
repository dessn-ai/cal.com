import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetContent } from '../../../../packages/ui/components/sheet/Sheet';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-sheet-content",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "This is the sheet content",
      label: "Content",
    },
  });

  return (
    <SheetContent className={state.className.value}>
      {state.children.value}
    </SheetContent>
  );
}