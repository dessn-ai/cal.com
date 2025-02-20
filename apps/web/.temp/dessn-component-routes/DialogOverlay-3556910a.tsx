import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogOverlay } from '@radix-ui/react-dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <Dialog open={true}>
      <DialogOverlay className={state.className.value} />
    </Dialog>
  );
}