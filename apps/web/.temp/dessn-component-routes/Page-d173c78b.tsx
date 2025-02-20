import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Instead of direct import, use dynamic import with error handling
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/general/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return { default: () => <div>Failed to load component</div> };
    })
);

// Mock TRPC Client
const mockTrpc = {
  withTRPC: (Component: React.ComponentType) => {
    const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    };
    return TRPCProvider;
  },
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  // Mock the necessary functions and components
  const mockGetTranslate = async () => (key: string) => key;
  const mockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  const mockLegacyPage = () => <div>Legacy Page Content</div>;

  // Mock the imports
  if (typeof window !== 'undefined') {
    (window as any).getTranslate = mockGetTranslate;
    (window as any).SettingsHeader = mockSettingsHeader;
    (window as any).LegacyPage = mockLegacyPage;
  }

  // Mock i18n instance
  const i18n = {
    language: 'en',
    languages: ['en'],
    options: {},
    t: (key: string) => key,
    exists: () => true,
    getFixedT: () => ((key: string) => key),
    changeLanguage: () => Promise.resolve(),
  };

  const TRPCProvider = mockTrpc.withTRPC(() => null);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={i18n as any}>
            <QueryClientProvider client={queryClient}>
              <TRPCProvider>
                <TooltipProvider>
                  <FeatureProvider>
                    <div className="preview-container">
                      <ImportedComponent />
                    </div>
                  </FeatureProvider>
                </TooltipProvider>
              </TRPCProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
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