import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogContent } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-content",
      label: "Class Name",
    },
  });

  return (
    <DialogContent className={state.className.value}>
      <h2>Dialog Content</h2>
      <p>This is an example of dialog content.</p>
    </DialogContent>
  );
}