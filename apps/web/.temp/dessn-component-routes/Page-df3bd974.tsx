import React, { Suspense, ErrorBoundary } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

// Dynamically import the component with no SSR
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/availability/[schedule]/page').catch(() => {
    return () => <div>Failed to load component</div>;
  }),
  { ssr: false }
);

// Create a mock TRPC client
const trpc = createTRPCReact<any>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
  transformer: superjson,
});

// Error Boundary Component
class PreviewErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the preview.</div>;
    }
    return this.props.children;
  }
}

// Mock Feature Provider
const MockFeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ schedule: "1" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <PreviewErrorBoundary>
      <Suspense fallback={<div>Loading preview...</div>}>
        <QueryClientProvider client={queryClient}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <SessionProvider session={null}>
              <I18nextProvider 
                i18n={{ 
                  language: 'en',
                  resources: {},
                  t: (key: string) => key,
                } as any}
              >
                <TooltipProvider>
                  <MockFeatureProvider>
                    <div className="preview-container">
                      <ImportedComponent {...props} />
                    </div>
                  </MockFeatureProvider>
                </TooltipProvider>
              </I18nextProvider>
            </SessionProvider>
          </trpc.Provider>
        </QueryClientProvider>
      </Suspense>
    </PreviewErrorBoundary>
  );
}