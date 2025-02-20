import React from 'react';
import { useParentState } from '../useIframeState';
import { FailedBookingsByField } from '../../../../packages/features/insights/components/FailedBookingsByField';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { useState } from 'react';

// Create a mock TRPC instance
const mockTrpc = createTRPCReact();

// Create a mock TRPC client
const mockTrpcClient = mockTrpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

export default function ComponentPreview() {
  const [queryClient] = useState(() => new QueryClient());
  const [state, setState] = useParentState({
    userId: {
      type: "string",
      value: "user123",
      label: "User ID",
    },
    teamId: {
      type: "string",
      value: "team456",
      label: "Team ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "string",
      value: "form789",
      label: "Routing Form ID",
    },
  });

  // Mock the TRPC query response
  mockTrpc.useQuery = () => ({
    data: {
      "Form 1": {
        field1: [
          { optionId: "1", count: 5, optionLabel: "Option 1" },
          { optionId: "2", count: 3, optionLabel: "Option 2" },
        ],
        field2: [
          { optionId: "3", count: 2, optionLabel: "Option 3" },
          { optionId: "4", count: 4, optionLabel: "Option 4" },
        ],
      },
      "Form 2": {
        field3: [
          { optionId: "5", count: 1, optionLabel: "Option 5" },
          { optionId: "6", count: 6, optionLabel: "Option 6" },
        ],
      },
    },
    isLoading: false,
    isError: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
        <FailedBookingsByField />
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
}