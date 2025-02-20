import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/DisableTeamImpersonation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock version of trpc
const mockTrpcContext = {
  viewer: {
    teams: {
      getMembershipbyUser: {
        useQuery: () => ({
          data: { disableImpersonation: false },
          isPending: false,
          isLoading: false,
          error: null,
        }),
      },
      updateMembership: {
        useMutation: () => ({
          mutate: () => Promise.resolve(),
          isPending: false,
          isLoading: false,
          error: null,
        }),
      },
    },
  },
};

// Create a mock Provider component
const MockTrpcProvider = ({ children }) => {
  // Inject the mock context into the real trpc context
  const contextValue = React.useMemo(
    () => ({
      client: mockTrpcContext,
      queryClient: new QueryClient(),
      trpc: mockTrpcContext,
    }),
    []
  );

  return <div data-testid="mock-trpc-provider">{children}</div>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    memberId: {
      type: "number",
      value: 100,
      label: "Member ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  return (
    <QueryClientProvider client={queryClient}>
      <MockTrpcProvider>
        <ImportedComponent
          teamId={state.teamId.value}
          memberId={state.memberId.value}
          disabled={state.disabled.value}
        />
      </MockTrpcProvider>
    </QueryClientProvider>
  );
}