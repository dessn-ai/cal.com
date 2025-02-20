import React from 'react';
import { useParentState } from '../useIframeState';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog",
      label: "Class Name",
    },
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
  });

  return (
    <Dialog open={state.isOpen.value}>
      <DialogContent className={state.className.value}>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>This is a sample dialog content.</DialogDescription>
        </DialogHeader>
        <div>
          <p>Here's some additional content for the dialog.</p>
        </div>
        <DialogFooter>
          <button onClick={() => setState('isOpen', false)}>Close Dialog</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}