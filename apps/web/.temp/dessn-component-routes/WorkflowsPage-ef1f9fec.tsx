import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/index';
import { SessionProvider } from 'next-auth/react';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import superjson from 'superjson';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';
import { UserPermissionRole } from '@calcom/prisma/enums';

// Create a mock TRPC instance
const trpc = createTRPCReact();

// Create a wrapper component to handle session initialization
const SessionInitializer = ({ children }: { children: React.ReactNode }) => {
  // Initialize session data
  const session = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    user: {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      role: 'ADMIN' as const,
      organizationId: 1,
      organization: {
        id: 1,
        name: 'Test Organization',
        slug: 'test-org',
        logoUrl: null,
      },
      org: {
        id: 1,
        name: 'Test Organization',
        slug: 'test-org',
        logoUrl: null,
      },
      teams: [],
      avatar: '',
      timeZone: 'UTC',
      weekStart: 'Monday',
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      defaultScheduleId: 1,
      locale: 'en',
      timeFormat: 12,
      trialEndsAt: null,
      metadata: {},
      identityProvider: 'CAL',
      completedOnboarding: true,
      hasValidLicense: true,
    },
  };

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    filteredList: {
      type: 'string',
      value: JSON.stringify({
        totalCount: 5,
        filtered: [
          { id: 1, name: 'Workflow 1' },
          { id: 2, name: 'Workflow 2' },
          { id: 3, name: 'Workflow 3' },
          { id: 4, name: 'Workflow 4' },
          { id: 5, name: 'Workflow 5' },
        ],
      }),
      label: 'Filtered List',
    },
  });

  // Organization branding value
  const orgBrandingValue = {
    orgBrand: {
      id: 1,
      name: 'Test Organization',
      slug: 'test-org',
      logoUrl: null,
      fullDomain: 'test-org.cal.com',
      domainSuffix: 'cal.com',
      role: 'ADMIN' as const,
      theme: null,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      hideBranding: false,
    },
  };

  // Create a new QueryClient instance with error handling
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        onError: (error) => {
          console.error('Query error:', error);
        }
      },
      mutations: {
        retry: false,
        onError: (error) => {
          console.error('Mutation error:', error);
        }
      }
    }
  }));
  
  // Create a new TRPC client with error handling
  const [trpcClient] = React.useState(() => 
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
          headers: () => ({
            'x-trpc-source': 'preview'
          })
        }),
      ],
      transformer: superjson,
    })
  );

  return (
    <SessionInitializer>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <OrgBrandingProvider value={orgBrandingValue}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <ImportedComponent
                filteredList={JSON.parse(state.filteredList.value)}
              />
            </React.Suspense>
          </OrgBrandingProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </SessionInitializer>
  );
}