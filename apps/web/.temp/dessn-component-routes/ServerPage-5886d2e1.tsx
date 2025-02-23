import React, { Suspense, Component } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Error Boundary Component
class ErrorBoundary extends Component<
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
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Lazy load the imported component
const LazyImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/teams/new/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return { default: () => (
        <div style={{ padding: '20px', color: 'red' }}>
          Failed to load the component. Please check the console for more details.
        </div>
      )};
    })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={{} as any}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <LazyImportedComponent />
                  </div>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}