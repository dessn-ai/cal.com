import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient();

// Lazy load the component to handle dynamic imports better
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/d/[link]/[slug]/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

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

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (e) {
    params = { link: "example-link", slug: "example-slug" };
    searchParams = { query: "example-query" };
  }

  return (
    <SessionProvider>
      <I18nextProvider i18n={{} as any}>
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
  );
}