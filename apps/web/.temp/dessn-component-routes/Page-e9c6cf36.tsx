import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  resources: {},
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Providers
const MockOrgBrandingProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Lazy load the component
const LazyImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/oAuth/page')
    .catch(err => ({
      default: () => (
        <div className="p-4 text-red-500">
          Failed to load component: {err.message}
        </div>
      )
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const mockGetTranslate = async () => (key: string) => key;

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <MockFeatureProvider>
                  <MockOrgBrandingProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <div className="w-full">
                        <LazyImportedComponent getTranslate={mockGetTranslate} />
                      </div>
                    </Suspense>
                  </MockOrgBrandingProvider>
                </MockFeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </MockTRPCProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary Component
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
      return (
        <div className="p-4">
          <h2>Something went wrong.</h2>
          <details className="mt-2">
            <summary>Error Details</summary>
            <pre className="mt-2 text-sm text-red-600">
              {this.state.error?.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}