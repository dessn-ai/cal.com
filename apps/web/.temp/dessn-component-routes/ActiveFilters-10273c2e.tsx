import React from 'react';
import { useParentState } from '../useIframeState';
import { ActiveFilters } from '../../../../packages/features/data-table/components/filters/ActiveFilters';
import { DataTableProvider } from '../../../../packages/features/data-table/lib/context';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {},
      label: 'Table',
    },
  });

  const columns = [
    {
      id: 'example',
      accessorKey: 'example',
      header: 'Example',
    }
  ];

  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataTableProvider
      data={[]}
      columns={columns}
      initialState={{}}
      onStateChange={() => {}}
    >
      <ActiveFilters table={table} />
    </DataTableProvider>
  );
}