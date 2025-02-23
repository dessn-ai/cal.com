import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableSkeleton } from '../../../../packages/features/data-table/components/DataTableSkeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    columns: {
      type: "number",
      value: 5,
      label: "Number of Columns",
    },
    rows: {
      type: "number",
      value: 10,
      label: "Number of Rows",
    },
    columnWidths: {
      type: "string",
      value: "100,150,200,120,180",
      label: "Column Widths (comma-separated)",
    },
  });

  const columnWidths = state.columnWidths.value.split(',').map(Number);

  return (
    <DataTableSkeleton
      columns={state.columns.value}
      rows={state.rows.value}
      columnWidths={columnWidths}
    />
  );
}