import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ workflow: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  // Use dynamic import with error handling
  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/workflows/[workflow]/page')
      .catch(error => {
        console.error('Failed to load component:', error);
        return { default: () => <div>Failed to load component</div> };
      })
  );

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={{
          language: 'en',
          resources: {},
          t: (key: string) => key,
        } as any}>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent params={params} searchParams={searchParams} />
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </MockTRPCProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}