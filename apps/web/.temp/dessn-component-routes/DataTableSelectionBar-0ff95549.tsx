import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableSelectionBar } from '../../../../packages/features/data-table/components/DataTableSelectionBar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showSelectionCount: {
      type: "boolean",
      value: true,
      label: "Show Selection Count",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <DataTableSelectionBar.Root
      showSelectionCount={state.showSelectionCount.value}
      className={state.className.value}
    >
      <DataTableSelectionBar.Button
        icon="User"
        onClick={() => console.log("Button clicked")}
      >
        Sample Button
      </DataTableSelectionBar.Button>
    </DataTableSelectionBar.Root>
  );
}