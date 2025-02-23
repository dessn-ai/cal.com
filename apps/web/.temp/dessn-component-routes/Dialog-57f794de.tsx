import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogClose } from '../../../../packages/ui/components/dialog/Dialog';

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
    <div>
      <Dialog
        name={state.name.value}
        open={state.open.value}
        clearQueryParamsOnClose={state.clearQueryParamsOnClose.value.split(',')}>
        <DialogContent>
          <DialogHeader title="Example Dialog" />
          <div className="p-4">
            <p>Dialog Content</p>
          </div>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}