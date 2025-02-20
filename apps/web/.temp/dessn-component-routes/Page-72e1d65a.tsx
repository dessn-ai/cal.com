import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SessionProvider } from 'next-auth/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  const Component = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/[id]/profile/page'));

  return (
    <SessionProvider>
      <I18nextProvider i18n={{} as any}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Component />
                </ErrorBoundary>
              </Suspense>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; FallbackComponent: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error: Error | null }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}