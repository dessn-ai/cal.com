import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent, DialogTitle } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-title",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Dialog Title",
      label: "Title Text",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogTitle className={state.className.value}>
          {state.children.value}
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}