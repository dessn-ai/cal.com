import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhooks-view';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import superjson from 'superjson';
import { UserPermissionRole } from '@calcom/prisma/enums';

// Create a mock context for useBookerUrl
const BookerUrlContext = React.createContext("http://localhost:3000");
const useBookerUrl = () => React.useContext(BookerUrlContext);

// Mock the actual module
const MockBookerUrlProvider = ({ children }) => (
  <BookerUrlContext.Provider value="http://localhost:3000">
    {children}
  </BookerUrlContext.Provider>
);

// Create a simple TRPC instance for the preview
const trpc = createTRPCReact();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
  });

  const mockSession = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      username: 'testuser',
      role: state.isAdmin.value ? UserPermissionRole.ADMIN : UserPermissionRole.USER,
      locale: 'en',
      defaultScheduleId: 1,
    },
    expires: new Date(Date.now() + 86400000).toISOString(),
  };

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Set up mock data for the TRPC query
  React.useEffect(() => {
    queryClient.setQueryData(
      [['viewer', 'webhook', 'getByViewer'], { type: 'query' }],
      {
        webhookGroups: [{
          teamId: null,
          metadata: {},
          profile: {
            slug: 'default',
            name: 'Default Profile',
            image: null
          },
          webhooks: []
        }],
        profiles: [{
          slug: 'default',
          name: 'Default Profile',
          image: null
        }]
      }
    );
  }, [queryClient]);

  const [trpcClient] = React.useState(() => ({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  }));

  return (
    <SessionProvider session={mockSession}>
      <MockBookerUrlProvider>
        <trpc.Provider client={trpcClient as any} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <ImportedComponent />
          </QueryClientProvider>
        </trpc.Provider>
      </MockBookerUrlProvider>
    </SessionProvider>
  );
}

// Override the module import
(window as any).useBookerUrl = useBookerUrl;