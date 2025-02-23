import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

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

// Mock TRPC Provider wrapper
const MockTRPCWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/oAuth/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <MockTRPCWrapper>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <div className="w-full">
                      <ImportedComponent getTranslate={mockGetTranslate} />
                    </div>
                  </React.Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </MockTRPCWrapper>
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
          <h1>Something went wrong.</h1>
          <pre className="mt-2 text-sm text-red-500">
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}