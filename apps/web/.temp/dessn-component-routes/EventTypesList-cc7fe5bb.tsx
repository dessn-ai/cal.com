import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/users/components/UserTable/BulkActions/EventTypesList';

export default function ComponentPreview() {
  const mockTable = {
    type: "object",
    value: {
      // Instead of passing functions, we'll pass the data structure directly
      selectedRowModel: {
        flatRows: []
      },
      // We'll store this as a boolean since we can't pass functions
      allRowsSelected: false
    },
    label: "Table",
  };

  const mockOrgTeams = {
    type: "object",
    value: [
      {
        id: 1,
        name: "Team 1",
        members: []
      }
    ],
    label: "Organization Teams",
  };

  const [state, setState] = useParentState({
    table: mockTable,
    orgTeams: mockOrgTeams,
  });

  // Create the table object with methods here, after the state is retrieved
  const tableWithMethods = {
    ...state.table.value,
    getSelectedRowModel: () => ({
      flatRows: state.table.value.selectedRowModel.flatRows
    }),
    toggleAllRowsSelected: () => {}
  };

  return (
    <EventTypesList
      table={tableWithMethods}
      orgTeams={state.orgTeams.value}
    />
  );
}