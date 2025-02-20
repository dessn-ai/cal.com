import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { LeastBookedTeamMembersTable } from '../../../../packages/features/insights/components/LeastBookedTeamMembersTable';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { SessionProvider } from 'next-auth/react';
import { MembershipRole } from '@calcom/prisma/enums';

// Mock InsightsContext
const InsightsContext = createContext({
  setSelectedTimeView: () => {},
  timeView: 'week',
  setSelectedTeamId: () => {},
  selectedTeamId: null,
  selectedTeamMembers: [],
  setSelectedTeamMembers: () => {},
});

// Mock InsightsProvider Component
const MockInsightsProvider = ({ children }) => {
  const value = {
    setSelectedTimeView: () => {},
    timeView: 'week',
    setSelectedTeamId: () => {},
    selectedTeamId: null,
    selectedTeamMembers: [],
    setSelectedTeamMembers: () => {},
  };

  return (
    <InsightsContext.Provider value={value}>
      {children}
    </InsightsContext.Provider>
  );
};

// Mock the data-table exports
const useDataTable = () => ({
  activeFilters: [
    {
      f: "createdAt",
      v: {
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        endDate: new Date().toISOString(),
        preset: "LAST_30_DAYS"
      },
      eq: "range"
    }
  ],
  setActiveFilters: () => {},
  columns: [],
  data: [],
  page: 1,
  setPage: () => {},
  sorting: [],
  setSorting: () => {},
  tableState: {},
  setTableState: () => {},
});

// Create a mock DataTable context
const DataTableContext = createContext({
  useDataTable,
});

// Mock DataTable Provider Component
const MockDataTableProvider = ({ children }) => {
  return (
    <DataTableContext.Provider value={{ useDataTable }}>
      {children}
    </DataTableContext.Provider>
  );
};

// Create a mock InsightsFilterContext
const InsightsFilterContext = createContext({
  filter: {
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    endDate: new Date(),
    teamId: undefined,
    eventTypeId: undefined,
    isAll: true
  },
  setFilter: () => {},
  clearFilters: () => {}
});

// Mock Provider Component
const MockInsightsFilterProvider = ({ children }) => {
  const value = {
    filter: {
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      endDate: new Date(),
      teamId: undefined,
      eventTypeId: undefined,
      isAll: true
    },
    setFilter: () => {},
    clearFilters: () => {}
  };

  return (
    <InsightsFilterContext.Provider value={value}>
      {children}
    </InsightsFilterContext.Provider>
  );
};

// Mock session following next-auth session structure
const mockSession = {
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  user: {
    id: "user1",
    name: "Test User",
    email: "test@example.com",
    org: {
      id: 1,
      name: "Test Org",
      slug: "test-org",
      role: MembershipRole.ADMIN
    },
    username: "testuser",
    role: MembershipRole.ADMIN
  }
};

// Create a wrapper component to handle any potential errors
const SafeInsightsOrgTeamsProvider = ({ children }) => {
  try {
    return <InsightsOrgTeamsProvider>{children}</InsightsOrgTeamsProvider>;
  } catch (error) {
    console.error('Error in InsightsOrgTeamsProvider:', error);
    return <div>Error loading insights component</div>;
  }
};

// Mock the hooks that useInsightsParameters depends on
const useInsightsOrgTeams = () => ({
  isAll: true,
  teamId: undefined,
  userId: "user1"
});

// Export the mocked hooks to make them available globally
Object.defineProperty(global, 'useInsightsOrgTeams', {
  value: useInsightsOrgTeams,
  writable: true
});

Object.defineProperty(global, 'useDataTable', {
  value: useDataTable,
  writable: true
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return (
    <SessionProvider session={mockSession}>
      <MockInsightsProvider>
        <MockDataTableProvider>
          <MockInsightsFilterProvider>
            <SafeInsightsOrgTeamsProvider>
              <LeastBookedTeamMembersTable />
            </SafeInsightsOrgTeamsProvider>
          </MockInsightsFilterProvider>
        </MockDataTableProvider>
      </MockInsightsProvider>
    </SessionProvider>
  );
}