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

  // Wrap the import in a try-catch to handle potential import failures
  const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/license-key/new/page')
    .catch(error => {
      console.error('Failed to load component:', error);
      return { default: () => <div>Error loading component</div> };
    })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <I18nextProvider i18n={{} as any}>
            <TooltipProvider>
              <FeatureProvider>
                <ImportedComponent params={params} searchParams={searchParams} />
              </FeatureProvider>
            </TooltipProvider>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </Suspense>
  );
}