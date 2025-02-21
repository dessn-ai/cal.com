import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  resources: {},
});

// Create TRPC
const trpc = createTRPCReact();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

// Mock Feature Provider
const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  const mockFeatures = {
    flags: {},
    features: {},
  };
  return <div data-testid="feature-provider">{children}</div>;
};

// Mock Org Branding Provider
const OrgBrandingProvider = ({ children }: { children: React.ReactNode }) => {
  const mockBranding = {
    theme: {},
    organization: null,
  };
  return <div data-testid="org-branding-provider">{children}</div>;
};

// Lazy load the imported component
const LazyImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/settings/page')
    .catch(err => ({
      default: () => <div>Error loading component: {err.message}</div>
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the generateMetadata function
  const mockGenerateMetadata = async () => ({
    title: 'Settings',
    description: 'Team settings description'
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <I18nextProvider i18n={i18n}>
            <SessionProvider session={null}>
              <TooltipProvider>
                <FeatureProvider>
                  <OrgBrandingProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <div className="w-full">
                        <LazyImportedComponent 
                          getTranslate={mockGetTranslate}
                          generateMetadata={mockGenerateMetadata}
                        />
                      </div>
                    </Suspense>
                  </OrgBrandingProvider>
                </FeatureProvider>
              </TooltipProvider>
            </SessionProvider>
          </I18nextProvider>
        </trpc.Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}