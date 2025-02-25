import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent, DialogDescription } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "This is a dialog description.",
      label: "Description Text",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogDescription
          className={state.className.value}
        >
          {state.children.value}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}