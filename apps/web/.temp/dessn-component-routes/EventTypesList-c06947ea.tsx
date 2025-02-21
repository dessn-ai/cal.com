import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/ee/teams/components/EventTypesList';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SelectionState,
} from "@tanstack/react-table";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: {},
      label: "Table",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const [rowSelection, setRowSelection] = React.useState<SelectionState>({});

  // Create a basic table instance with minimum required functionality
  const table = useReactTable({
    data: [], // Empty data array as placeholder
    columns: [
      {
        id: 'select',
        header: 'Select',
        accessorKey: 'select',
      },
      {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
      },
      {
        id: 'name',
        header: 'Name',
        accessorKey: 'name',
      }
    ],
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <EventTypesList
      table={table}
      teamId={state.teamId.value}
    />
  );
}