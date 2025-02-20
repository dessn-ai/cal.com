import React from 'react';
import { useParentState } from '../useIframeState';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content>
          <DialogClose className={state.className.value}>
            Close Dialog
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}