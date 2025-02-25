import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/index';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create mock contexts
const OrgBrandingContext = React.createContext({
  orgBranding: {
    theme: null,
    orgSlug: 'test-org',
    hideBranding: false,
    logo: null,
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    organizationName: 'Test Org',
  }
});

const MockOrgBrandingProvider = ({ children }) => {
  const value = {
    orgBranding: {
      theme: null,
      orgSlug: 'test-org',
      hideBranding: false,
      logo: null,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      organizationName: 'Test Org',
    }
  };
  return (
    <OrgBrandingContext.Provider value={value}>
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Mock the useOrgBranding hook
React.useOrgBranding = () => ({
  orgBranding: {
    theme: null,
    orgSlug: 'test-org',
    hideBranding: false,
    logo: null,
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    organizationName: 'Test Org',
  }
});

const TRPCContext = React.createContext(null);
const MockTRPCProvider = ({ children }) => {
  const mockTrpcClient = {
    viewer: {
      workflows: {
        filteredList: {
          useQuery: () => ({
            data: {
              totalCount: 5,
              filtered: [
                { id: 1, name: 'Workflow 1' },
                { id: 2, name: 'Workflow 2' },
                { id: 3, name: 'Workflow 3' },
                { id: 4, name: 'Workflow 4' },
                { id: 5, name: 'Workflow 5' },
              ]
            },
            isPending: false,
          }),
        },
        create: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <TRPCContext.Provider value={mockTrpcClient}>
      {children}
    </TRPCContext.Provider>
  );
};

// Simple wrapper component
const SimpleWrapper = ({ children }) => (
  <div className="flex min-h-screen w-full flex-col">
    <div className="flex flex-1">
      <main className="flex-1">
        <div className="mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient());
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

  const mockSession = {
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        role: 'ADMIN',
        organizationId: 1,
        organization: {
          id: 1,
          name: 'Test Org',
          slug: 'test-org',
        },
        teams: [],
        theme: null,
        timeZone: 'UTC',
        weekStart: 'Monday',
        brandColor: '#292929',
        darkBrandColor: '#fafafa',
        metadata: {},
        emailVerified: true,
        completedOnboarding: true,
      },
      hasValidLicense: true,
      organization: {
        id: 1,
        name: 'Test Org',
        slug: 'test-org',
        metadata: {},
      },
    },
    status: 'authenticated',
  };

  return (
    <I18nextProvider i18n={i18n}>
      <SessionProvider session={mockSession as any}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <MockOrgBrandingProvider>
              <MockTRPCProvider>
                <SimpleWrapper>
                  <ImportedComponent
                    filteredList={JSON.parse(state.filteredList.value)}
                  />
                </SimpleWrapper>
              </MockTRPCProvider>
            </MockOrgBrandingProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </SessionProvider>
    </I18nextProvider>
  );
}