import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Lazy load the component to handle dynamic imports better
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/d/[link]/[slug]/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ link: "example-link", slug: "example-slug" }),
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
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider>
          <I18nextProvider i18n={{}}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <div className="preview-container">
                    <ImportedComponent params={params} searchParams={searchParams} />
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

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <pre>{this.state.error?.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}