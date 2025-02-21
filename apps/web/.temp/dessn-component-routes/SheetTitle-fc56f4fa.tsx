import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetContent, SheetTitle } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Example Sheet Title",
      label: "Title",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetTitle className={state.className.value}>
          {state.title.value}
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}