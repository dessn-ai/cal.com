import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/ee/teams/components/EventTypesList';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tableData: {
      type: "object",
      value: {
        selectedRowModel: {
          flatRows: [
            {
              original: {
                id: 1,
                name: 'Test User',
                email: 'test@example.com',
              }
            }
          ]
        },
        state: {
          rowSelection: {}
        },
        rowModel: {
          rows: []
        }
      },
      label: "Table Data",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  // Construct the table object using the state data
  const table = {
    getSelectedRowModel: () => state.tableData.value.selectedRowModel,
    toggleAllRowsSelected: () => {},
    getState: () => state.tableData.value.state,
    setRowSelection: () => {},
    getRowModel: () => state.tableData.value.rowModel,
    getPreFilteredRowModel: () => state.tableData.value.rowModel,
    getFilteredRowModel: () => state.tableData.value.rowModel,
    getCoreRowModel: () => state.tableData.value.rowModel,
    getPaginationRowModel: () => state.tableData.value.rowModel,
    getSortedRowModel: () => state.tableData.value.rowModel
  };

  return (
    <div className="w-full">
      <EventTypesList
        table={table}
        teamId={state.teamId.value}
      />
    </div>
  );
}