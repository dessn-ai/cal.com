import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/users/components/UserTable/BulkActions/EventTypesList';
import { InsightsOrgTeamsProvider } from "../../../../packages/features/insights/context/InsightsOrgTeamsProvider";

// Define mocks inline
const mockDataTable = {
  useDataTable: () => ({
    data: [],
    isLoading: false,
    fetchNextPage: () => Promise.resolve(),
    hasNextPage: false,
    isFetchingNextPage: false,
    setFilters: () => {},
    filters: {},
  }),
  useFilterValue: () => ({
    value: "",
    setValue: () => {},
  })
};

// Mock the data-table hooks globally
global["@calcom/features/data-table/hooks/useDataTable"] = mockDataTable.useDataTable;
global["@calcom/features/data-table/hooks/useFilterValue"] = mockDataTable.useFilterValue;

// Pre-computed table model
const tableModel = {
  rows: [],
  flatRows: [],
  rowsById: {},
};

const tableState = {
  rowSelection: {},
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: {
        selectedModel: tableModel,
        rowModel: tableModel,
        state: tableState,
        options: {
          data: [],
          state: tableState,
        },
      },
      label: "Table",
    },
    orgTeams: {
      type: "object",
      value: [
        {
          id: 1,
          name: "Team 1",
          slug: "team-1",
          members: [],
        },
        {
          id: 2,
          name: "Team 2",
          slug: "team-2",
          members: [],
        }
      ],
      label: "Organization Teams",
    },
  });

  return (
    <InsightsOrgTeamsProvider>
      <EventTypesList
        table={{
          ...state.table.value,
          getSelectedRowModel: () => tableModel,
          getState: () => tableState,
          getRowModel: () => tableModel,
          setRowSelection: () => {},
          resetRowSelection: () => {},
        }}
        orgTeams={state.orgTeams.value}
      />
    </InsightsOrgTeamsProvider>
  );
}