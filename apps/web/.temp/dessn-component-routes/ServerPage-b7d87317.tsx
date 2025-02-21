import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

// Lazy load the component
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/signup/page')
    .catch(error => ({
      default: () => (
        <div role="alert" style={{ padding: '20px', color: 'red' }}>
          <h2>Failed to load component</h2>
          <pre>{error.message}</pre>
        </div>
      )
    }))
);

// Create mock i18n instance
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {}
    }
  },
  interpolation: {
    escapeValue: false
  }
});

// Create a mock query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

// Mock session
const mockSession = {
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

// Create mock TRPC
const trpc = createTRPCReact();
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

const LoadingFallback = () => (
  <div style={{ padding: '20px' }}>
    <p>Loading component...</p>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert" style={{ padding: '20px', color: 'red' }}>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
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
      value: JSON.stringify({ id: "example" }),
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

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <SessionProvider session={mockSession}>
            <I18nextProvider i18n={i18n}>
              <TooltipProvider>
                <FeatureProvider>
                  <Suspense fallback={<LoadingFallback />}>
                    <ImportedComponent {...pageProps} />
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </I18nextProvider>
          </SessionProvider>
        </trpc.Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}