import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsListing } from '../../../../packages/features/ee/teams/components/TeamsListing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC instance
const trpc = createTRPCReact();

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create a mock TRPC client
const mockTrpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Wrap the component with necessary providers
  return (
    <trpc.Provider client={mockTrpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <TeamsListing />
      </QueryClientProvider>
    </trpc.Provider>
  );
}