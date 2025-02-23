import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogPortal, DialogContent } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dialog Content",
      label: "Children",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <Dialog open={true}>
      <DialogPortal>
        <DialogContent className={state.className.value}>
          {state.children.value}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}