import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormEmbedDialog } from '../../../../packages/features/embed/RoutingFormEmbed';
import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppRouter } from '@calcom/trpc/server/routers/_app';
import { EmbedDialogProvider } from '../../../../packages/features/embed/lib/hooks/useEmbedDialogCtx';

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
        <EmbedDialogProvider>
          <RoutingFormEmbedDialog />
        </EmbedDialogProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}