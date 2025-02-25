import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC instance
const mockTrpc = createTRPCReact<any>();

// Create a mock client
const queryClient = new QueryClient();
const mockClient = mockTrpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
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

  // Mock the TRPC hooks
  mockTrpc.useContext = () => ({
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
  });

  mockTrpc.viewer.organizations.adminGetAll.useSuspenseQuery = () => [JSON.parse(state.mockData.value)];
  mockTrpc.viewer.organizations.adminUpdate.useMutation = () => ({
    mutate: async () => {},
  });
  mockTrpc.viewer.organizations.adminDelete.useMutation = () => ({
    mutate: async () => {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider client={mockClient}>
        <ImportedComponent />
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
}