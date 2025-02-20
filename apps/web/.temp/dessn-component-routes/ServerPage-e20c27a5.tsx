import React, { Suspense, ErrorBoundary } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPCProvider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock FeatureProvider
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Error Fallback Component
const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

class ComponentErrorBoundary extends React.Component<
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
      return <ErrorFallback error={this.state.error!} />;
    }

    return this.props.children;
  }
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
      value: JSON.stringify({ token: "abc123" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/verify-email-change/page'));

  return (
    <ComponentErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={{
          language: 'en',
          resources: {},
          t: (key: string) => key,
        } as any}>
          <QueryClientProvider client={queryClient}>
            <MockTRPCProvider>
              <TooltipProvider>
                <MockFeatureProvider>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent params={params} searchParams={searchParams} />
                  </Suspense>
                </MockFeatureProvider>
              </TooltipProvider>
            </MockTRPCProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </ComponentErrorBoundary>
  );
}