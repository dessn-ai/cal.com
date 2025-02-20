import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent } from '../../../../packages/platform/atoms/src/components/ui/dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-content",
      label: "Class Name",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent className={state.className.value}>
        <h2>Dialog Content</h2>
        <p>This is an example of dialog content.</p>
      </DialogContent>
    </Dialog>
  );
}