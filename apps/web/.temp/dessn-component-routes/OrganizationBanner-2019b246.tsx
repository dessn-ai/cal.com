import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationBanner } from '../../../../packages/features/users/components/UserTable/EditSheet/OrganizationBanner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { useState } from 'react';

// Create a new QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Create mock TRPC client
const mockTrpcClient = {
  viewer: {
    organizations: {
      listCurrent: {
        useQuery: () => ({
          data: {
            bannerUrl: 'https://example.com/banner.jpg',
          },
          isPending: false,
          error: null,
          isLoading: false,
        }),
      },
    },
  },
};

const MockTRPCProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bannerUrl: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Banner URL",
    },
  });

  return (
    <MockTRPCProvider>
      <OrganizationBanner />
    </MockTRPCProvider>
  );
}