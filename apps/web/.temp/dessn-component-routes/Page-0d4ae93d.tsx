import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Set up polyfills without modifying crypto
if (typeof window !== 'undefined') {
  window.global = window;
  window.process = window.process || { env: {} };
  window.Buffer = window.Buffer || { isBuffer: () => false };
}

// Helper function to generate hex string (replacement for crypto.randomBytes)
const generateHexString = (size: number) => {
  const arr = new Uint8Array(size);
  window.crypto.getRandomValues(arr);
  return Array.from(arr)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Patch global scope with necessary functions
if (typeof window !== 'undefined') {
  (window as any).generateNonce = () => generateHexString(16);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Initialize i18next with basic configuration
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
  fallbackLng: 'en',
});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

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

// Lazy load the component with error handling
const LazyImportedComponent = React.lazy(() => {
  return import('../../app/(use-page-wrapper)/insights/virtual-queues/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return {
        default: () => (
          <div style={{ padding: '20px', color: 'red' }}>
            Failed to load the component. Please check the console for more details.
          </div>
        )
      };
    });
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  try {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={null}>
            <I18nextProvider i18n={i18n}>
              <MockTRPCProvider>
                <QueryClientProvider client={queryClient}>
                  <TooltipProvider>
                    <FeatureProvider>
                      <LazyImportedComponent />
                    </FeatureProvider>
                  </TooltipProvider>
                </QueryClientProvider>
              </MockTRPCProvider>
            </I18nextProvider>
          </SessionProvider>
        </Suspense>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Preview render error:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        Failed to render preview component. Check console for details.
      </div>
    );
  }
}