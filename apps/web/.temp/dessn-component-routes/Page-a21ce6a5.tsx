import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { FeatureProvider } from "@calcom/features/flags/context/provider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ImportedComponentWithSuspense = React.lazy(() => import('../../app/(use-page-wrapper)/workflows/[workflow]/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ workflow: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <SessionProvider>
      <I18nextProvider i18n={{} as any}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                  <ImportedComponentWithSuspense 
                    params={params} 
                    searchParams={searchParams} 
                  />
                </ErrorBoundary>
              </Suspense>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
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