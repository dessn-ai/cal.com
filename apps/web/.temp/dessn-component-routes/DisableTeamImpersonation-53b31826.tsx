import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/DisableTeamImpersonation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create mock TRPC
const mockTrpc = createTRPCReact();

// Create mock TRPC client
const mockTrpcClient = mockTrpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

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

  // Mock the specific procedures needed
  const mockedQueries = {
    viewer: {
      teams: {
        getMembershipbyUser: {
          useQuery: () => ({
            data: { disableImpersonation: false },
            isPending: false,
          }),
        },
        updateMembership: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  // Merge the mock procedures with the TRPC instance
  const trpcWithMocks = {
    ...mockTrpc,
    ...mockedQueries,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
        <ImportedComponent
          teamId={state.teamId.value}
          memberId={state.memberId.value}
          disabled={state.disabled.value}
        />
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
}