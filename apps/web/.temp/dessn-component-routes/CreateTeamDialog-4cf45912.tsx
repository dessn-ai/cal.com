import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/CreateTeamDialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import superjson from 'superjson';
import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

// Create a simple trpc instance for preview
const api = createTRPCReact();

// Create a new QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a minimal trpc client
const trpcClient = api.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: '/api/trpc',
      headers: () => ({
        'x-trpc-source': 'preview',
      }),
    }),
  ],
});

// Mock organization branding data with correct type
const mockOrgBranding = {
  id: 1,
  slug: 'demo-org',
  fullDomain: 'demo-org.cal.com',
  domainSuffix: 'cal.com',
  role: 'OWNER',
  name: 'Demo Organization',
  logoUrl: null,
  theme: null,
  brandColor: '#292929',
  darkBrandColor: '#fafafa',
  hideBranding: false,
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
  });

  const handleOpenChange = (open: boolean) => {
    setState('open', open);
  };

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <OrgBrandingProvider value={{ orgBrand: mockOrgBranding }}>
          <ImportedComponent 
            open={state.open.value} 
            onOpenChange={handleOpenChange}
          />
        </OrgBrandingProvider>
      </QueryClientProvider>
    </api.Provider>
  );
}