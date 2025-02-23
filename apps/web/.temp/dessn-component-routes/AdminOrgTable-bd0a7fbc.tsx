import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Create a mock TRPC context
const createMockTrpc = (mockData) => ({
  useContext: () => ({
    viewer: {
      organizations: {
        adminGetAll: {
          invalidate: async () => {},
        },
        adminGet: {
          invalidate: async () => {},
          refetch: async () => {},
        },
      },
    },
  }),
  viewer: {
    organizations: {
      adminGetAll: {
        useSuspenseQuery: () => [mockData],
        useQuery: () => ({ data: mockData, isLoading: false, error: null }),
      },
      adminUpdate: {
        useMutation: () => ({
          mutate: async () => {},
          isLoading: false,
        }),
      },
      adminDelete: {
        useMutation: () => ({
          mutate: async () => {},
          isLoading: false,
        }),
      },
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockData: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Sample Organization",
          slug: "sample-org",
          members: [{ user: { email: "user@example.com" } }],
          organizationSettings: {
            isAdminReviewed: false,
            isOrganizationConfigured: false,
            isAdminAPIEnabled: false,
          },
          metadata: { requestedSlug: "sample-org" },
        },
      ]),
      label: "Mock Data",
    },
  });

  // Parse the mock data
  const mockData = JSON.parse(state.mockData.value);

  // Create mock TRPC instance
  const mockTrpc = createMockTrpc(mockData);

  // Create a mock Provider component
  const MockTRPCProvider = ({ children }) => {
    return children;
  };

  // Override the global trpc object
  const trpcContext = {
    ...mockTrpc,
    Provider: MockTRPCProvider,
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <trpcContext.Provider>
        <ImportedComponent />
      </trpcContext.Provider>
    </QueryClientProvider>
  );
}