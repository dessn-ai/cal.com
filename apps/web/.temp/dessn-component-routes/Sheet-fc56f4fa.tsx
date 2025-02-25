import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter
} from '../../../../packages/ui/components/sheet/Sheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open",
    },
    title: {
      type: "string",
      value: "Sheet Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sheet description",
      label: "Description",
    },
    showCloseButton: {
      type: "boolean",
      value: true,
      label: "Show Close Button",
    },
  });

  return (
    <Sheet open={state.open.value}>
      <SheetContent>
        <SheetHeader showCloseButton={state.showCloseButton.value}>
          <SheetTitle>{state.title.value}</SheetTitle>
          <SheetDescription>{state.description.value}</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p>Sheet content goes here</p>
        </SheetBody>
        <SheetFooter>
          <button onClick={() => setState('open', false)}>Close</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}