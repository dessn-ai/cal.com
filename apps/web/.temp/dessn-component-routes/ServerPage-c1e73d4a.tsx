import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {},
});

// Create a minimal TRPC setup
const trpc = createTRPCReact();

// Create clients
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
      headers: () => ({
        'x-trpc-source': 'preview',
      }),
    }),
  ],
});

const ImportedComponentWithSuspense = React.lazy(() => import('../../app/(use-page-wrapper)/[user]/page'));

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ user: "johndoe" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <I18nextProvider i18n={i18n}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                  <ImportedComponentWithSuspense params={params} searchParams={searchParams} />
                </ErrorBoundary>
              </Suspense>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </I18nextProvider>
  );
}