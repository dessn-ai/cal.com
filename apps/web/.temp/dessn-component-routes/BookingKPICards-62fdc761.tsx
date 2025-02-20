import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { BookingKPICards } from '../../../../packages/features/insights/components/BookingKPICards';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create contexts for our hooks
const HooksContext = createContext<any>(null);

// Mock data
const mockTeamData = {
  teams: [
    {
      id: 1,
      name: "Mock Team",
      slug: "mock-team",
      members: [{ id: 1, name: "Mock User" }]
    }
  ],
  isLoading: false,
  error: null,
  orgMembers: [{ id: 1, name: "Mock User" }],
  currentTeam: {
    id: 1,
    name: "Mock Team",
    slug: "mock-team",
  }
};

// Create a provider that will inject our mock hooks
const MockHooksProvider = ({ children }) => {
  const mockHooks = {
    useInsightsOrgTeams: () => mockTeamData,
    useInsightsParameters: () => ({
      startDate: new Date().toISOString(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      teamId: 1,
      userId: 1,
      isAll: false,
      memberUserId: 1,
      eventTypeId: 1
    })
  };

  // Inject mock hooks into global scope
  React.useEffect(() => {
    const originalWindow = window as any;
    originalWindow.useInsightsOrgTeams = mockHooks.useInsightsOrgTeams;
    originalWindow.useInsightsParameters = mockHooks.useInsightsParameters;

    // Cleanup
    return () => {
      delete originalWindow.useInsightsOrgTeams;
      delete originalWindow.useInsightsParameters;
    };
  }, []);

  return (
    <HooksContext.Provider value={mockHooks}>
      {children}
    </HooksContext.Provider>
  );
};

// Create a mock TRPC environment
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Wrapper component that provides all necessary context
const ProvidersWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MockHooksProvider>
        {children}
      </MockHooksProvider>
    </QueryClientProvider>
  );
};

// Create a wrapped version of BookingKPICards that includes error handling
const WrappedBookingKPICards = (props) => {
  try {
    return <BookingKPICards {...props} />;
  } catch (error) {
    console.error('Error rendering BookingKPICards:', error);
    return (
      <div className="error-boundary">
        <h3>Error Loading Component</h3>
        <pre>{error.message}</pre>
      </div>
    );
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
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
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
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
  });

  return (
    <ProvidersWrapper>
      <WrappedBookingKPICards 
        startDate={state.startDate.value}
        endDate={state.endDate.value}
        teamId={state.teamId.value}
        userId={state.userId.value}
        isAll={state.isAll.value}
        memberUserId={state.memberUserId.value}
        eventTypeId={state.eventTypeId.value}
      />
    </ProvidersWrapper>
  );
}