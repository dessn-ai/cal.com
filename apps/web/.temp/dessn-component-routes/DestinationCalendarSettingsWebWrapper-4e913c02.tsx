import React from 'react';
import { useParentState } from '../useIframeState';
import { DestinationCalendarSettingsWebWrapper } from '../../../../packages/platform/atoms/destination-calendar/wrappers/DestinationCalendarSettingsWebWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { useState } from 'react';

// Create a mock TRPC client
const mockTrpcClient = createTRPCReact();
const mockQueryClient = new QueryClient();
const mockTrpcClientOptions = {
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
};

// Create a wrapper component that provides the TRPC context
function TRPCWrapper({ children }) {
  const [queryClient] = useState(() => mockQueryClient);
  const [trpcClient] = useState(() => mockTrpcClient.createClient(mockTrpcClientOptions));

  return (
    <mockTrpcClient.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </mockTrpcClient.Provider>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <TRPCWrapper>
      <DestinationCalendarSettingsWebWrapper />
    </TRPCWrapper>
  );
}