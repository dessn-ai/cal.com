import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsListing } from '../../../../packages/features/ee/teams/components/TeamsListing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
  const [state, setState] = useParentState({});

  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
        <TeamsListing />
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
}