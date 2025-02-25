import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import dynamic from 'next/dynamic';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Dynamically import the component with no SSR
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/platform/new/page'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock TRPC Provider since we can't access the real one in preview
const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock OrgBranding Provider
const OrgBrandingProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock Feature Provider
const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

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

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={{} as any}>
            <TRPCProvider>
              <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                  <FeatureProvider>
                    <OrgBrandingProvider>
                      <div className="w-full">
                        <ImportedComponent {...props} />
                      </div>
                    </OrgBrandingProvider>
                  </FeatureProvider>
                </TooltipProvider>
              </QueryClientProvider>
            </TRPCProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

// Basic Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}