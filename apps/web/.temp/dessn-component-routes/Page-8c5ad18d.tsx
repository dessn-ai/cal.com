import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import i18next from 'i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
  fallbackLng: 'en',
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      suspense: true,
    },
  },
});

// Mock Feature Flags
const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock TRPC Provider
const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock the necessary dependencies
const mockSession = {
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: '2024-01-01',
};

// Mock components and utilities
const MockUsersAddView = () => <div>Mock UsersAddView</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div>Mock SettingsHeader {children}</div>
);

// Mock TRPC hooks
const mockTrpc = {
  trpc: {
    useQuery: () => ({ data: null, isLoading: false, error: null }),
    useMutation: () => ({ mutate: () => {}, isLoading: false }),
  },
};

// Create a mock component that loads the actual component with mocked dependencies
const LazyImportedComponent = React.lazy(async () => {
  // Mock the modules before importing
  (globalThis as any).mockModules = {
    'app/_utils': {
      getTranslate: () => (key: string) => key,
    },
    '@calcom/features/ee/users/pages/users-add-view': MockUsersAddView,
    '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
    '@calcom/trpc/react': mockTrpc,
  };

  try {
    const module = await import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/add/page');
    return { default: module.default };
  } catch (error) {
    console.error('Failed to load component:', error);
    return {
      default: () => <div>Failed to load component</div>
    };
  }
});

export default function ComponentPreview() {
  return (
    <SessionProvider session={mockSession}>
      <I18nextProvider i18n={i18n}>
        <TRPCProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImportedComponent />
                </Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </TRPCProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}