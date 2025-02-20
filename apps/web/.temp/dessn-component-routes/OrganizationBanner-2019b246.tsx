import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationBanner } from '../../../../packages/features/users/components/UserTable/EditSheet/OrganizationBanner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC instance
const mockTrpc = createTRPCReact();

// Create a mock query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock TRPC client
const mockTrpcClient = mockTrpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

const MockTRPCProvider = ({ children }) => {
  return (
    <mockTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </mockTrpc.Provider>
  );
};

// Mock the TRPC hook
mockTrpc.useQuery = () => ({
  data: {
    bannerUrl: 'https://example.com/banner.jpg',
  },
  isPending: false,
  error: null,
});

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