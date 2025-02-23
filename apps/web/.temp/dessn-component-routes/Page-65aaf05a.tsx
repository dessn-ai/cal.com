import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import { SessionProvider } from 'next-auth/react';

// Use dynamic import for the page component
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/page')
);

// Mock TRPC Provider component
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Initialize i18next
  const i18n = i18next.createInstance();
  i18n.init({
    fallbackLng: 'en',
    resources: {},
  });

  // Initialize QueryClient
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        // Disable all queries by default
        enabled: false,
      },
    },
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Mock session with more realistic data
  const mockSession = {
    data: {
      user: {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
      },
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    },
    status: "authenticated"
  };

  try {
    return (
      <SessionProvider session={mockSession}>
        <QueryClientProvider client={queryClient}>
          <MockTRPCProvider>
            <I18nextProvider i18n={i18n}>
              <TooltipProvider>
                <FeatureProvider
                  features={{
                    flags: {},
                    defaultFlags: {},
                  }}
                >
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <ErrorBoundary fallback={<div>Error loading component</div>}>
                      <ImportedComponent getTranslate={mockGetTranslate} />
                    </ErrorBoundary>
                  </React.Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </I18nextProvider>
          </MockTRPCProvider>
        </QueryClientProvider>
      </SessionProvider>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error: Failed to load component</div>;
  }
}

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}