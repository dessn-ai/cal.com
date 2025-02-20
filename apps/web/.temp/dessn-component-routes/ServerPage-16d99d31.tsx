import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  // Wrap the import in a try-catch to handle potential import failures
  const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/setup/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return { default: () => <div>Failed to load component</div> };
    })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider>
        <I18nextProvider i18n={{}}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <ImportedComponent params={params} searchParams={searchParams} />
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}