import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateButtonWithTeamsList } from '../../../../packages/ui/components/createButton/CreateButtonWithTeamsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

// Mock data
const mockTeamsData = [
  { teamId: 1, name: 'Team 1', slug: 'team-1', image: 'https://example.com/team1.jpg', readOnly: false },
  { teamId: 2, name: 'Team 2', slug: 'team-2', image: 'https://example.com/team2.jpg', readOnly: false },
  { teamId: null, name: 'User Profile', slug: 'user-profile', image: 'https://example.com/user.jpg', readOnly: false },
];

// Create a mock TRPC context
const MockTRPCProvider = ({ children }) => {
  // Mock the trpc context value
  const mockTrpcContextValue = {
    trpc: {
      viewer: {
        teamsAndUserProfilesQuery: {
          useQuery: () => ({
            data: mockTeamsData,
            isLoading: false,
            error: null
          })
        }
      }
    }
  };

  // Create a context to override the default TRPC context
  const TRPCContext = React.createContext(mockTrpcContextValue);

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCContext.Provider value={mockTrpcContextValue}>
        {children}
      </TRPCContext.Provider>
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onlyShowWithTeams: {
      type: "boolean",
      value: false,
      label: "Only Show With Teams",
    },
    onlyShowWithNoTeams: {
      type: "boolean",
      value: false,
      label: "Only Show With No Teams",
    },
    isAdmin: {
      type: "boolean",
      value: false,
      label: "Is Admin",
    },
    includeOrg: {
      type: "boolean",
      value: false,
      label: "Include Org",
    },
  });

  return (
    <MockTRPCProvider>
      <CreateButtonWithTeamsList
        onlyShowWithTeams={state.onlyShowWithTeams.value}
        onlyShowWithNoTeams={state.onlyShowWithNoTeams.value}
        isAdmin={state.isAdmin.value}
        includeOrg={state.includeOrg.value}
      />
    </MockTRPCProvider>
  );
}