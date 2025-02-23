import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationBanner } from '../../../../packages/features/users/components/UserTable/EditSheet/OrganizationBanner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC instance
const mockTrpc = createTRPCReact();

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock client
const mockClient = {
  organizations: {
    listCurrent: {
      query: () => Promise.resolve({
        bannerUrl: 'https://example.com/banner.jpg',
      }),
    },
  },
};

const MockTRPCProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider
        client={mockClient}
        queryClient={queryClient}
      >
        {children}
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
};

// Create mock proxy handler
const handler = {
  get: (target, prop) => {
    if (prop === 'viewer') {
      return new Proxy({}, {
        get: () => ({
          organizations: {
            listCurrent: {
              useQuery: () => ({
                data: {
                  bannerUrl: 'https://example.com/banner.jpg',
                },
                isPending: false,
                error: null,
              }),
            },
          },
        }),
      });
    }
    return target[prop];
  },
};

// Create mock trpc with proxy
const trpc = new Proxy({}, handler);

// Override the imported trpc
Object.defineProperty(window, 'trpc', {
  value: trpc,
  writable: true,
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