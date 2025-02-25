import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandDialog } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open",
    },
  });

  return (
    <CommandDialog open={state.open.value}>
      {/* Add child components here if needed */}
    </CommandDialog>
  );
}