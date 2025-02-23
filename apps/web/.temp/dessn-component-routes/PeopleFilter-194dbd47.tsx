import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleFilter } from '../../../../packages/features/bookings/components/PeopleFilter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create a mock trpc client
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
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <PeopleFilter />
      </QueryClientProvider>
    </trpc.Provider>
  );
}