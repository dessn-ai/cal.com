import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet, SheetContent, SheetDescription } from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This is a sample description for the Sheet component.",
      label: "Description Content",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <Sheet open={true}>
      <SheetContent>
        <SheetDescription
          className={state.className.value}
        >
          {state.content.value}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}