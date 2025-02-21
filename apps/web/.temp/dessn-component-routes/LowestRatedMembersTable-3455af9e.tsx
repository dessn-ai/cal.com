import React, { createContext, useContext, useRef } from 'react';
import { useParentState } from '../useIframeState';
import { LowestRatedMembersTable } from '../../../../packages/features/insights/components/LowestRatedMembersTable';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Create DataTable Context
const DataTableContext = createContext<any>(null);

// Create useDataTable hook that the component will use
export const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};

// Create DataTable Provider
const DataTableProvider = ({ children }: { children: React.ReactNode }) => {
  const tableContainerRef = useRef(null);

  const contextValue = {
    data: [],
    setData: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    filter: {},
    setFilter: () => {},
    filterValue: "",
    setFilterValue: () => {},
    selectedIds: [],
    setSelectedIds: () => {},
    tableContainerRef,
    page: 1,
    setPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    sortBy: "",
    setSortBy: () => {},
    sortOrder: "asc",
    setSortOrder: () => {},
    totalRecords: 0,
    columns: [],
    setColumns: () => {},
    // Add any other methods that might be needed
    useFilterValue: () => ["", () => {}],
    useSelectedIds: () => [[], () => {}],
    usePage: () => [1, () => {}],
    usePageSize: () => [10, () => {}],
    useSortBy: () => ["", () => {}],
    useSortOrder: () => ["asc", () => {}],
    useColumns: () => [[], () => {}],
  };

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

// Mock i18n wrapper component
const I18nWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock TRPC Provider with mock query client
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const mockTrpc = {
    useQuery: () => ({
      data: {
        teams: [
          {
            id: 1,
            name: "Mock Team",
            members: [
              {
                id: 1,
                name: "Mock Member",
                email: "mock@example.com"
              }
            ]
          }
        ]
      },
      isLoading: false,
      error: null
    })
  };

  // @ts-ignore - Ignore type checking for mock
  return React.createElement(React.Fragment, { trpc: mockTrpc }, children);
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "End Date",
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

  const mockInsightsProps = {
    teams: [
      {
        id: 1,
        name: "Mock Team",
        members: [
          {
            id: 1,
            name: "Mock Member",
            email: "mock@example.com"
          }
        ]
      }
    ]
  };

  try {
    return (
      <MockTRPCProvider>
        <I18nWrapper>
          <InsightsOrgTeamsProvider defaultTeams={mockInsightsProps.teams}>
            <DataTableProvider>
              <LowestRatedMembersTable 
                teamId={state.teamId.value}
                startDate={state.startDate.value}
                endDate={state.endDate.value}
                eventTypeId={state.eventTypeId.value}
                isAll={state.isAll.value}
              />
            </DataTableProvider>
          </InsightsOrgTeamsProvider>
        </I18nWrapper>
      </MockTRPCProvider>
    );
  } catch (error) {
    console.error('Error rendering LowestRatedMembersTable:', error);
    return <div>Error loading component. Please check console for details.</div>;
  }
}

// Make hooks available globally
(window as any).useDataTable = useDataTable;