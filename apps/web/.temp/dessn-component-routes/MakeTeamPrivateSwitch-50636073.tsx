import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MakeTeamPrivateSwitch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create mock TRPC
const mockTrpcClient = {
  viewer: {
    teams: {
      update: {
        useMutation: () => ({
          mutate: async () => {},
          isPending: false
        })
      }
    }
  }
};

// Create a mock TRPC instance
const trpc = createTRPCReact();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  // Create a mock TRPC client
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/api/trpc',
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ImportedComponent
          teamId={state.teamId.value}
          isPrivate={state.isPrivate.value}
          disabled={state.disabled.value}
          isOrg={state.isOrg.value}
        />
      </QueryClientProvider>
    </trpc.Provider>
  );
}