import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog } from '../../../../packages/ui/components/dialog/Dialog';
import { DialogContent } from '../../../../packages/ui/components/dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Example Dialog",
      label: "Dialog Name",
    },
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    clearQueryParamsOnClose: {
      type: "string",
      value: "param1,param2",
      label: "Clear Query Params on Close",
    },
  });

  return (
    <Dialog
      name={state.name.value}
      open={state.open.value}
      clearQueryParamsOnClose={state.clearQueryParamsOnClose.value.split(',')}>
      <DialogContent>
        <div className="p-6">Dialog Content</div>
      </DialogContent>
    </Dialog>
  );
}