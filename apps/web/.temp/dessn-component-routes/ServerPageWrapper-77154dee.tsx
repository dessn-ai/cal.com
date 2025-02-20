import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';

// Mock component instead of importing
const MockComponent = () => {
  return (
    <div className="mock-component">
      <h1>Platform Plans Page</h1>
      <p>This is a mock component for testing purposes</p>
    </div>
  );
};

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  }
});

// Create a QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <div className="preview-wrapper">
      <ErrorBoundary>
        <SessionProvider session={null}>
          <I18nextProvider i18n={i18next}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider
                  features={{
                    flags: {},
                    defaultFlags: {},
                  }}
                >
                  <div className="preview-container">
                    <MockComponent />
                  </div>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </ErrorBoundary>
    </div>
  );
}

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
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}