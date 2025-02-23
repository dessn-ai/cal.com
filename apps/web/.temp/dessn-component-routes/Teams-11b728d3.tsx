import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/teams/teams-view';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create TRPC client
const trpc = createTRPCReact();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
  transformer: superjson,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ImportedComponent />
      </QueryClientProvider>
    </trpc.Provider>
  );
}