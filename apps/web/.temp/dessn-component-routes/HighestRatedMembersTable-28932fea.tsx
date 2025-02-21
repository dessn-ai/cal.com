import React from 'react';
import { useParentState } from '../useIframeState';
import { HighestRatedMembersTable } from '../../../../packages/features/insights/components/HighestRatedMembersTable';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { trpc } from '@calcom/trpc';

// Create a wrapper component that includes all necessary providers and mocks
const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  // Create a context for the data table
  const DataTableContext = React.createContext<any>(null);

  // Create the actual provider component that the hooks are looking for
  const DataTableProvider = ({ children }: { children: React.ReactNode }) => {
    const value = React.useMemo(() => ({
      data: [],
      setData: () => {},
      columns: [],
      setColumns: () => {},
      loading: false,
      setLoading: () => {},
      selectedRows: new Set(),
      setSelectedRows: () => {},
      filter: {},
      setFilter: () => {},
      tableState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
        sorting: [],
        columnFilters: [],
        columnVisibility: {},
      },
      setTableState: () => {},
    }), []);

    return (
      <DataTableContext.Provider value={value}>
        {children}
      </DataTableContext.Provider>
    );
  };

  // Create the hooks that components will use
  const useDataTable = () => {
    const context = React.useContext(DataTableContext);
    if (!context) {
      throw new Error('useDataTable must be used within a DataTableProvider');
    }
    return context;
  };

  const useFilterValue = () => {
    const { filter, setFilter } = useDataTable();
    return {
      value: filter,
      setValue: setFilter,
    };
  };

  // Set up the hooks in the global scope
  React.useEffect(() => {
    (global as any).useDataTable = useDataTable;
    (global as any).useFilterValue = useFilterValue;
  }, []);

  return <DataTableProvider>{children}</DataTableProvider>;
};

// Mock the trpc.viewer.insights.membersWithHighestRatings.useQuery
const mockUseQuery = () => ({
  data: [
    { id: 1, name: 'John Doe', rating: 4.8, feedbackCount: 50 },
    { id: 2, name: 'Jane Smith', rating: 4.7, feedbackCount: 45 },
    { id: 3, name: 'Bob Johnson', rating: 4.6, feedbackCount: 40 },
  ],
  isSuccess: true,
  isPending: false,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    insights: {
      membersWithHighestRatings: {
        useQuery: mockUseQuery,
      },
      orgTeams: {
        list: {
          useQuery: () => ({
            data: [
              { id: 1, name: 'Team 1' },
              { id: 2, name: 'Team 2' },
            ],
            isLoading: false,
          }),
        },
      },
    },
  },
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Mock the useInsightsParameters hook
const mockUseInsightsParameters = () => ({
  isAll: true,
  teamId: 1,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: 1,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date('2023-01-01').toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date('2023-12-31').toISOString(),
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  // Override the necessary hooks and modules
  React.useEffect(() => {
    (global as any).trpc = mockTrpc;
    (global as any).useLocale = mockUseLocale;
    (global as any).useInsightsParameters = mockUseInsightsParameters;
  }, []);

  return (
    <TableWrapper>
      <InsightsOrgTeamsProvider>
        <HighestRatedMembersTable />
      </InsightsOrgTeamsProvider>
    </TableWrapper>
  );
}