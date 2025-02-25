import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { TooltipProvider } from "@radix-ui/react-tooltip";

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/categories/[category]/page'));

// Create a simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ category: AppCategories.CALENDAR }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error("Error parsing params:", error);
    params = { category: AppCategories.CALENDAR };
    searchParams = {};
  }

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={{} as any}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <div className="preview-container">
                  <ImportedComponent params={params} searchParams={searchParams} />
                </div>
              </Suspense>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}