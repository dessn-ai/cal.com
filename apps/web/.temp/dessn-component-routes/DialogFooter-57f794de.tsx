import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogFooter } from '../../../../packages/ui/components/dialog/Dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDivider: {
      type: "boolean",
      value: false,
      label: "Show Divider",
    },
    noSticky: {
      type: "boolean",
      value: false,
      label: "No Sticky",
    },
  });

  return (
    <DialogFooter 
      showDivider={state.showDivider.value} 
      noSticky={state.noSticky.value}
    >
      <div>Footer Content</div>
    </DialogFooter>
  );
}