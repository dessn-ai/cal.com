import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/impersonation-view';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create TRPC
const trpc = createTRPCReact();

// Create TRPC client
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
    // No props to configure for this component
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ImportedComponent />
      </QueryClientProvider>
    </trpc.Provider>
  );
}