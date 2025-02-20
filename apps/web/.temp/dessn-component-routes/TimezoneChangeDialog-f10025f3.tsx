import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/TimezoneChangeDialog';

import { SessionProvider } from 'next-auth/react';
import { trpc } from '@calcom/trpc/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDialog: {
      type: "boolean",
      value: true,
      label: "Show Dialog",
    },
  });

  return (
    <SessionProvider session={null}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {state.showDialog.value && <ImportedComponent />}
        </QueryClientProvider>
      </trpc.Provider>
    </SessionProvider>
  );
}