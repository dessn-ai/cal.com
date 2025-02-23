import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogFooter } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "dialog-footer",
      label: "Class Name",
    },
  });

  return (
    <DialogFooter className={state.className.value}>
      <button>Cancel</button>
      <button>Confirm</button>
    </DialogFooter>
  );
}