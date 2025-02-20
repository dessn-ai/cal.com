import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import i18next from 'i18next';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Mock components and utilities
const MockAdminAPIView = () => <div>AdminAPIView Mock</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>SettingsHeader Mock {children}</div>
);
const mockGetTranslate = (key: string) => key;
const mockGenerateMetadata = () => ({});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create TRPC
const trpc = createTRPCReact();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      suspense: false,
    },
  },
});

// Mock feature flags
const mockFeatureFlags = {
  flags: {},
  isFeatureEnabled: () => false,
};

// Mock session data
const mockSession = {
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

// Override imports with mocks
const mockModules = {
  'app/_utils': {
    getTranslate: mockGetTranslate,
    _generateMetadata: mockGenerateMetadata,
  },
  '@calcom/features/ee/organizations/pages/settings/admin-api': {
    AdminAPIView: MockAdminAPIView,
  },
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
};

// Create a lazy-loaded component with mock fallback
const ImportedComponent = React.lazy(() => 
  Promise.resolve({
    default: () => (
      <div>
        <MockSettingsHeader>
          <MockAdminAPIView />
        </MockSettingsHeader>
      </div>
    )
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={mockSession}>
        <I18nextProvider i18n={i18n}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <FeatureProvider value={mockFeatureFlags}>
                <TooltipProvider>
                  <ImportedComponent />
                </TooltipProvider>
              </FeatureProvider>
            </QueryClientProvider>
          </trpc.Provider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}