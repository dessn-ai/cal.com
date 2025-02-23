import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { FeatureProvider } from "@calcom/features/flags/context/provider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

// Mock TRPC Provider component
const MockTrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Wrap the imported component in error boundary
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/organizations/[id]/about/page')
    .catch(() => ({
      default: () => <div>Error loading component</div>
    }))
);

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        {children}
      </div>
    </React.Suspense>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const pageProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  // Mock the trpc hooks that might be used in the component
  (window as any).trpc = {
    useQuery: () => ({ data: null, isLoading: false, error: null }),
    useMutation: () => ({ mutate: async () => {}, isLoading: false }),
    useContext: () => ({}),
  };

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={{
          language: 'en',
          resources: {},
          t: (key: string) => key,
          options: {
            fallbackLng: 'en',
          }
        } as any}>
          <QueryClientProvider client={queryClient}>
            <MockTrpcProvider>
              <TooltipProvider>
                <FeatureProvider
                  featureFlags={{}}
                  enabledFlags={[]}
                  isFeatureEnabled={() => false}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent {...pageProps} />
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </MockTrpcProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}