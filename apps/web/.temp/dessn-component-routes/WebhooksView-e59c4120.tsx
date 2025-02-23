import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhooks-view';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';
import { UserPermissionRole } from '@calcom/prisma/enums';
import * as nextAuth from 'next-auth/react';

// Mock useSession
const mockSession = {
  data: {
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      username: "testuser",
      role: UserPermissionRole.ADMIN,
      locale: "en",
      defaultScheduleId: null,
    },
    expires: "2024-01-01",
  },
  status: "authenticated",
};

// Override useSession
nextAuth.useSession = () => mockSession;

// Create a simple mock TRPC setup
const mockTrpc = createTRPCReact({
  transformer: superjson,
});

const mockTrpcClient = {
  viewer: {
    webhook: {
      getByViewer: {
        useQuery: () => ({
          data: {
            webhookGroups: [],
            profiles: [{
              name: "Test User",
              slug: "test-user",
              image: null
            }]
          },
          isPending: false,
        }),
      },
    },
  },
};

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <mockTrpc.Provider client={mockTrpcClient as any} queryClient={queryClient}>
        <ImportedComponent />
      </mockTrpc.Provider>
    </QueryClientProvider>
  );
}