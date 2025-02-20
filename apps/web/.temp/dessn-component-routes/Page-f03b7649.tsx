import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// Create instances of required providers
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

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
      return (
        <div className="error-boundary">
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

// Mock Feature Provider
const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="mock-feature-provider">
      {children}
    </div>
  );
};

// Loading component
const Loading = () => <div>Loading...</div>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock session data
  const mockSession = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  // Lazy load the imported component
  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/calendars/page')
      .catch(error => {
        console.error('Failed to load component:', error);
        return { default: () => <div>Failed to load component</div> };
      })
  );

  return (
    <ErrorBoundary>
      <TooltipPrimitive.Provider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={mockSession}>
            <I18nextProvider i18n={i18n}>
              <FeatureProvider>
                <Suspense fallback={<Loading />}>
                  <div className="w-full">
                    <ImportedComponent />
                  </div>
                </Suspense>
              </FeatureProvider>
            </I18nextProvider>
          </SessionProvider>
        </QueryClientProvider>
      </TooltipPrimitive.Provider>
    </ErrorBoundary>
  );
}

// Add global mocks
if (typeof window !== 'undefined') {
  (window as any).getTranslate = async () => (key: string) => key;
  (window as any).Button = ({ children }: { children: React.ReactNode }) => <button>{children}</button>;
  (window as any).CalendarListContainer = () => <div>Calendar List Container</div>;
  (window as any).SettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
}