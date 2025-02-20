import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeEmbedDialog } from '../../../../packages/features/embed/EventTypeEmbed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@calcom/trpc/react';

// Create a mock TRPC Provider component that just renders children
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MockTRPCProvider>
        <EventTypeEmbedDialog />
      </MockTRPCProvider>
    </QueryClientProvider>
  );
}