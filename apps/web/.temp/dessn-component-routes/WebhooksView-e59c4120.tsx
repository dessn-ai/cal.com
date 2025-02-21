import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhooks-view';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';
import { UserPermissionRole } from '@calcom/prisma/enums';

// Create a simple TRPC instance
const api = createTRPCReact({
  transformer: superjson,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
  });

  const mockSession = {
    data: {
      user: {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        username: "testuser",
        role: state.isAdmin.value ? UserPermissionRole.ADMIN : UserPermissionRole.USER,
        locale: "en",
        defaultScheduleId: null,
        timeZone: "UTC",
        weekStart: "Monday",
        startTime: 0,
        endTime: 1440,
        bufferTime: 0,
        theme: null,
        createdDate: new Date().toISOString(),
        trialEndsAt: null,
        completedOnboarding: true,
        twoFactorEnabled: false,
        identityProvider: "CAL",
        brandColor: "#292929",
        darkBrandColor: "#fafafa",
        away: false,
        avatar: "",
        plan: "PRO"
      },
      expires: new Date(Date.now() + 2 * 86400000).toISOString(),
    },
    status: "authenticated",
  };

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Create a minimal TRPC client with error handling
  const [trpcClient] = React.useState(() => {
    return {
      query: () => Promise.resolve({
        webhookGroups: [],
        profiles: [{
          name: "Default Profile",
          slug: "default",
          image: null
        }]
      }),
      mutation: () => Promise.resolve({}),
      subscription: () => ({
        unsubscribe: () => {},
      }),
    };
  });

  return (
    <SessionProvider session={mockSession as any}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <ImportedComponent />
        </QueryClientProvider>
      </api.Provider>
    </SessionProvider>
  );
}