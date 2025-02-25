import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Lazy load the component to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/video/[uid]/page')
  .catch(() => ({
    default: () => <div>Error: Failed to load component</div>
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <ErrorBoundary>
      <SessionProvider>
        <I18nextProvider i18n={{}}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <ImportedComponent params={params} searchParams={searchParams} />
                </Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}