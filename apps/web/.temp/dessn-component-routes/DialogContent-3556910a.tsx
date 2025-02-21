import React from 'react';
import { useParentState } from '../useIframeState';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-content",
      label: "Class Name",
    },
  });

  return (
    <DialogPrimitive.Root open={true}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80" />
        <DialogPrimitive.Content className={`fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white p-6 shadow-lg duration-200 sm:rounded-lg ${state.className.value}`}>
          <h2>Dialog Content</h2>
          <p>This is an example of dialog content.</p>
          <DialogPrimitive.Close className="absolute right-4 top-4">
            ✕
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}