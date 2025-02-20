import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTable } from '../../../../packages/features/data-table/components/DataTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: {},
      label: "Table",
    },
    tableContainerRef: {
      type: "object",
      value: { current: null },
      label: "Table Container Ref",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "compact"],
      label: "Variant",
    },
    hideHeader: {
      type: "boolean",
      value: false,
      label: "Hide Header",
    },
    enableColumnResizing: {
      type: "boolean",
      value: false,
      label: "Enable Column Resizing",
    },
  });

  return (
    <DataTable
      table={state.table.value}
      tableContainerRef={state.tableContainerRef.value}
      isPending={state.isPending.value}
      variant={state.variant.value}
      hideHeader={state.hideHeader.value}
      enableColumnResizing={state.enableColumnResizing.value}
    />
  );
}