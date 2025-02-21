import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent, DialogTrigger } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Open Dialog",
      label: "Button Text",
    },
    className: {
      type: "string",
      value: "px-4 py-2 bg-blue-500 text-white rounded",
      label: "CSS Class",
    },
  });

  return (
    <Dialog>
      <DialogTrigger className={state.className.value}>
        {state.children.value}
      </DialogTrigger>
      <DialogContent>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dialog Content</h2>
          <p>This is a sample dialog content.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}