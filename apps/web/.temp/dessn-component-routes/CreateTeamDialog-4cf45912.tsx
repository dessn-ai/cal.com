import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/CreateTeamDialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import superjson from 'superjson';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a simple TRPC instance
const trpc = createTRPCReact();

// Create a mock TRPC router
const mockTrpcClient = trpc.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
      headers() {
        return {};
      },
    }),
  ],
});

// Create a stable QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock organization branding data
const mockOrgBranding = {
  logo: '',
  name: 'Test Organization',
  brand: {
    brandColor: '#292929',
    darkBrandColor: '#white',
    theme: null,
    hideBranding: false,
  },
  orgSlug: 'test-org',
  organizationId: 1,
  isOrganizationFeatureEnabled: true,
};

// Mock feature flags
const mockFeatureFlags = {
  flags: {
    'organizations': true,
    'teams': true,
  },
  isFeatureEnabled: () => true,
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
    <FeatureProvider value={mockFeatureFlags}>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={mockTrpcClient} queryClient={queryClient}>
          <OrgBrandingProvider value={mockOrgBranding}>
            <ImportedComponent 
              open={state.open.value} 
              onOpenChange={handleOpenChange}
            />
          </OrgBrandingProvider>
        </trpc.Provider>
      </QueryClientProvider>
    </FeatureProvider>
  );
}