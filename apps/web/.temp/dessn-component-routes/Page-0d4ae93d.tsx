import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import i18next from 'i18next';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create a safe random hex string generator using Web Crypto API
const generateRandomHex = (size: number) => {
  const arr = new Uint8Array(size);
  window.crypto.getRandomValues(arr);
  return Array.from(arr)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Mock the specific crypto functions needed
const mockGenerateNonce = () => {
  try {
    return generateRandomHex(16);
  } catch (error) {
    console.error('Failed to generate nonce:', error);
    return 'mock-nonce-' + Date.now();
  }
};

// Add mock to global scope without touching window.crypto
(window as any).generateNonce = mockGenerateNonce;

const ImportedComponentWithErrorBoundary = React.lazy(() => 
  import('../../app/(use-page-wrapper)/insights/virtual-queues/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Error in component:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

// Mock FeatureProvider if needed
const FeatureProvider = ({ children }: { children: React.ReactNode }) => children;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <ImportedComponentWithErrorBoundary />
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}