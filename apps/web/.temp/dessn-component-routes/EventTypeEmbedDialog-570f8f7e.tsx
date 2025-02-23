import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeEmbedDialog } from '../../../../packages/features/embed/EventTypeEmbed';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from '@calcom/trpc/server/routers/_app';

const trpc = createTRPCReact<AppRouter>();

const queryClient = new QueryClient();
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
        <EventTypeEmbedDialog />
      </QueryClientProvider>
    </trpc.Provider>
  );
}