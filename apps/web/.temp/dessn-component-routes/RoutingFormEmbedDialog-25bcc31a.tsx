import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormEmbedDialog } from '../../../../packages/features/embed/RoutingFormEmbed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EmbedDialogProvider } from '../../../../packages/features/embed/lib/hooks/useEmbedDialogCtx';

// Create a constant query client outside the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <QueryClientProvider client={queryClient}>
      <EmbedDialogProvider>
        <div className="bg-white p-6">
          <RoutingFormEmbedDialog />
        </div>
      </EmbedDialogProvider>
    </QueryClientProvider>
  );
}