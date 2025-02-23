import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogOverlay } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <Dialog open>
      <DialogOverlay className={state.className.value} />
    </Dialog>
  );
}