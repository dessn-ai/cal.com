import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogHeader } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-header",
      label: "Class Name",
    },
  });

  return (
    <DialogHeader className={state.className.value}>
      <h2>Dialog Header Content</h2>
      <p>This is a sample dialog header.</p>
    </DialogHeader>
  );
}