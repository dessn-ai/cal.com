import React from 'react';
import { useParentState } from '../useIframeState';
import * as DialogPrimitive from "@radix-ui/react-dialog";

// Create a simplified Dialog component for preview
const DialogPreview = ({ children, open, onOpenChange }) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
};

const DialogContent = ({ children }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-neutral-800 bg-opacity-70 transition-opacity" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 text-left shadow-xl">
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Example Dialog",
      label: "Dialog Name",
    },
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    clearQueryParamsOnClose: {
      type: "string",
      value: "param1,param2",
      label: "Clear Query Params on Close",
    },
  });

  return (
    <DialogPreview
      open={state.open.value}
      onOpenChange={(open) => {
        setState((prev) => ({
          ...prev,
          open: { ...prev.open, value: open },
        }));
      }}
    >
      <DialogContent>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{state.name.value}</h3>
        </div>
        <div className="py-4">
          <p>Dialog Content</p>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <DialogPrimitive.Close asChild>
            <button className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              Close
            </button>
          </DialogPrimitive.Close>
        </div>
      </DialogContent>
    </DialogPreview>
  );
}