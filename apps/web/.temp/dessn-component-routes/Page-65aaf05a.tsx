import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Lazy load the component to handle any potential loading issues
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/page'));

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  resources: {},
});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<div>Loading...</div>}>
                <div style={{ padding: '20px' }}>
                  <ImportedComponent getTranslate={mockGetTranslate} />
                </div>
              </Suspense>
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