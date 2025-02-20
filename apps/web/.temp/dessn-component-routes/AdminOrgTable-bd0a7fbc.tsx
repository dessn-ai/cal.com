import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgPage';

import { trpc } from "@calcom/trpc/react";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have explicit props, we'll mock some data
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

  // Mock trpc hooks
  const mockTrpc = {
    useUtils: () => ({
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
          useSuspenseQuery: () => [JSON.parse(state.mockData.value)],
        },
        adminUpdate: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
        adminDelete: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      <ImportedComponent />
    </trpc.Provider>
  );
}