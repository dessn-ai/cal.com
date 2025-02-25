import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";

// Create a client
const queryClient = new QueryClient();

// Lazy load the component to handle dynamic imports better
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/license-key/new/page')
  .catch(err => {
    console.error("Failed to load component:", err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
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
      <I18nextProvider i18n={{ language: 'en' } as any}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary>
                <ImportedComponent params={params} searchParams={searchParams} />
              </ErrorBoundary>
            </Suspense>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}