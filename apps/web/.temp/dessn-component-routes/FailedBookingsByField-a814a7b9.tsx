import React, { createContext, useContext, useState } from 'react';
import { useParentState } from '../useIframeState';
import { FailedBookingsByField } from '../../../../packages/features/insights/components/FailedBookingsByField';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Create DataTable Context and Provider
const DataTableContext = createContext<any>(null);

// Override the original hooks
const useDataTable = () => {
  return {
    filterValue: "",
    setFilterValue: () => {},
    data: [],
    isLoading: false,
    tableContainerRef: { current: null },
    setData: () => {},
    filter: "",
    setFilter: () => {},
    selectedIds: [],
    setSelectedIds: () => {},
    page: 1,
    setPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    sortBy: "",
    setSortBy: () => {},
    sortDirection: "asc",
    setSortDirection: () => {},
    columns: [],
    setColumns: () => {},
    selectedRows: [],
    setSelectedRows: () => {},
    totalRecords: 0,
  };
};

const useFilterValue = () => {
  const { filterValue, setFilterValue } = useDataTable();
  return [filterValue, setFilterValue] as const;
};

// Override the module imports
(window as any).require = (modulePath: string) => {
  if (modulePath.includes('data-table/hooks/useDataTable')) {
    return { useDataTable };
  }
  if (modulePath.includes('data-table/hooks/useFilterValue')) {
    return { useFilterValue };
  }
  return {};
};

// Create a mock TRPC instance
const mockTrpc = createTRPCReact();

// Create a mock client
const mockClient = {
  query: () => Promise.resolve({
    "Form 1": {
      field1: [
        { optionId: "1", count: 5, optionLabel: "Option 1" },
        { optionId: "2", count: 3, optionLabel: "Option 2" },
      ],
      field2: [
        { optionId: "3", count: 2, optionLabel: "Option 3" },
        { optionId: "4", count: 4, optionLabel: "Option 4" },
      ],
    },
    "Form 2": {
      field3: [
        { optionId: "5", count: 1, optionLabel: "Option 5" },
        { optionId: "6", count: 6, optionLabel: "Option 6" },
      ],
    },
  }),
};

// Mock insights teams data
const mockInsightsTeams = {
  teams: [
    {
      id: 1,
      name: "Team 1",
      slug: "team-1",
    },
    {
      id: 2,
      name: "Team 2",
      slug: "team-2",
    }
  ],
  currentTeam: {
    id: 1,
    name: "Team 1",
    slug: "team-1",
  },
  setCurrentTeam: () => {},
};

// Mock DataTable Provider component
const DataTableProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contextValue = {
    filterValue: "",
    setFilterValue: () => {},
    data: [],
    isLoading: false,
    tableContainerRef: { current: null },
    setData: () => {},
    filter: "",
    setFilter: () => {},
    selectedIds: [],
    setSelectedIds: () => {},
    page: 1,
    setPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    sortBy: "",
    setSortBy: () => {},
    sortDirection: "asc",
    setSortDirection: () => {},
    columns: [],
    setColumns: () => {},
    selectedRows: [],
    setSelectedRows: () => {},
    totalRecords: 0,
  };

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

export default function ComponentPreview() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => 
    mockTrpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
          fetch: async () => ({
            ok: true,
            json: async () => ({ result: { data: mockClient.query() } }),
          }) as Response,
        }),
      ],
    })
  );

  const [state, setState] = useParentState({
    userId: {
      type: "string",
      value: "user123",
      label: "User ID",
    },
    teamId: {
      type: "string",
      value: "team456",
      label: "Team ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "string",
      value: "form789",
      label: "Routing Form ID",
    },
  });

  return (
    <mockTrpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <InsightsOrgTeamsProvider value={mockInsightsTeams}>
          <DataTableProvider>
            <FailedBookingsByField />
          </DataTableProvider>
        </InsightsOrgTeamsProvider>
      </QueryClientProvider>
    </mockTrpc.Provider>
  );
}