import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { PopularEventsTable } from '@calcom/features/insights/components/PopularEventsTable';
import { InsightsOrgTeamsProvider } from '@calcom/features/insights/context/InsightsOrgTeamsProvider';

// Mock the exact context name that useDataTable expects
export const DataTableContext = createContext(null);

// Create a simple provider component with the expected context structure
const MockDataTableProvider = ({ children }) => {
  const value = {
    data: [],
    setData: () => {},
    isLoading: false,
    tableOptions: {
      state: {
        sorting: [],
        pagination: { pageIndex: 0, pageSize: 10 },
      },
    },
    onSortingChange: () => {},
    onPaginationChange: () => {},
    pageCount: 0,
    filterableColumns: [],
    searchableColumns: [],
    advancedFilters: [],
    selectedFilters: {},
    setSelectedFilters: () => {},
    table: {
      getState: () => ({
        sorting: [],
        pagination: { pageIndex: 0, pageSize: 10 },
      }),
      setPageIndex: () => {},
      setPageSize: () => {},
      setSorting: () => {},
    },
    columns: [],
    meta: {},
    filterableColumnsByGroup: {},
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

// Create a mock PopularEventsTable that doesn't depend on the DataTable
const MockPopularEventsTable = () => {
  return (
    <div>
      <h2>Popular Events Table</h2>
      <p>Mock table content</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      label: "End Date",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
  });

  // Mock data for InsightsOrgTeamsProvider
  const mockTeams = {
    teams: [
      {
        id: 1,
        name: "Default Team",
        slug: "default-team",
        members: [
          {
            id: 1,
            userId: 1,
            role: "OWNER",
          },
        ],
      },
    ],
    currentTeam: {
      id: 1,
      name: "Default Team",
      slug: "default-team",
      members: [
        {
          id: 1,
          userId: 1,
          role: "OWNER",
        },
      ],
    },
  };

  return (
    <MockDataTableProvider>
      <InsightsOrgTeamsProvider value={mockTeams}>
        <MockPopularEventsTable />
      </InsightsOrgTeamsProvider>
    </MockDataTableProvider>
  );
}