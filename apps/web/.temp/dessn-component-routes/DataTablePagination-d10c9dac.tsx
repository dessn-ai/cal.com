import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTablePagination } from '../../../../packages/features/data-table/components/DataTablePagination';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    totalDbDataCount: {
      type: "number",
      value: 100,
      label: "Total DB Data Count",
    },
  });

  const mockTable = {
    getFilteredRowModel: () => ({
      rows: Array(50).fill(null),
    }),
  };

  return (
    <DataTablePagination
      table={mockTable as any}
      totalDbDataCount={state.totalDbDataCount.value}
    />
  );
}