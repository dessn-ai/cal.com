import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/teams/teams-view';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create TRPC instance
const trpc = createTRPCReact();

// Create Query client
const queryClient = new QueryClient();

// Create TRPC client
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
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