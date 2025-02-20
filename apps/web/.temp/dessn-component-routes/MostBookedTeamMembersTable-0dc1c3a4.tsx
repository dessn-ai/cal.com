import React from 'react';
import { useParentState } from '../useIframeState';
import { MostBookedTeamMembersTable } from '../../../../packages/features/insights/components/MostBookedTeamMembersTable';
import { InsightsOrgTeamsContext } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Mock data for the table
const mockData = [
  { name: 'John Doe', bookings: 50 },
  { name: 'Jane Smith', bookings: 45 },
  { name: 'Bob Johnson', bookings: 40 },
];

// Create a wrapper component that provides all necessary mocks
const MockProvider = ({ children }) => {
  const mockQueryResult = {
    data: mockData,
    isSuccess: true,
    isPending: false,
  };

  // Mock TRPC provider
  const MockTRPCProvider = ({ children }) => {
    const mockTrpc = {
      viewer: {
        insights: {
          membersWithMostBookings: {
            useQuery: () => mockQueryResult,
          },
        },
      },
    };

    return React.createElement(React.Fragment, null, children);
  };

  // Mock InsightsOrgTeams value
  const insightsOrgTeamsValue = {
    orgTeamsType: "org" as const,
    setOrgTeamsType: (type: "org" | "team" | "yours") => {},
    selectedTeamId: 1,
    setSelectedTeamId: (id: number | undefined) => {},
  };

  return (
    <InsightsOrgTeamsContext.Provider value={insightsOrgTeamsValue}>
      <MockTRPCProvider>
        {children}
      </MockTRPCProvider>
    </InsightsOrgTeamsContext.Provider>
  );
};

// Create InsightsParameters Context
const InsightsParametersContext = React.createContext({
  isAll: true,
  teamId: 1,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: null,
});

// Mock next-auth session
const mockSession = {
  data: {
    user: {
      id: 1,
      org: {
        id: 1,
        role: "ADMIN"
      }
    }
  },
  status: "authenticated"
};

// Create a mock next-auth module
const mockNextAuth = {
  useSession: () => mockSession
};

// Add mock modules to window
Object.defineProperty(window, 'next-auth/react', {
  value: mockNextAuth
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <InsightsParametersContext.Provider
      value={{
        isAll: true,
        teamId: 1,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-12-31'),
        eventTypeId: null,
      }}
    >
      <MockProvider>
        <MostBookedTeamMembersTable />
      </MockProvider>
    </InsightsParametersContext.Provider>
  );
}