import React from 'react';
import { useParentState } from '../useIframeState';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <DialogPrimitive.Root open>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={state.className.value} />
        <DialogPrimitive.Content>
          {/* Empty content to ensure proper context */}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}