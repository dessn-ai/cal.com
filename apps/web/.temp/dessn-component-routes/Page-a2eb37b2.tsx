import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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

// Mock Feature Provider
const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock session
const mockSession = {
  data: null,
  status: "unauthenticated"
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Mock the SettingsHeader component
  const MockSettingsHeader = ({ children, title, description }: any) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );

  // Mock the TwoFactorAuthView component
  const MockTwoFactorAuthView = () => <div>Two Factor Auth View</div>;

  // Use React.lazy for the imported component
  const LazyImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/security/two-factor-auth/page')
      .catch(err => ({
        default: () => <div>Error loading component: {err.message}</div>
      }))
  );

  return (
    <SessionProvider session={mockSession}>
      <TooltipPrimitive.Provider>
        <FeatureProvider>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <div style={{ padding: '20px' }}>
                    <LazyImportedComponent
                      getTranslate={mockGetTranslate}
                      SettingsHeader={MockSettingsHeader}
                      TwoFactorAuthView={MockTwoFactorAuthView}
                    />
                  </div>
                </Suspense>
              </ErrorBoundary>
            </I18nextProvider>
          </QueryClientProvider>
        </FeatureProvider>
      </TooltipPrimitive.Provider>
    </SessionProvider>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          <h2>Something went wrong</h2>
          <pre>{this.state.error?.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}