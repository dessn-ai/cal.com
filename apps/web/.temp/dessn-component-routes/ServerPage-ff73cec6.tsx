import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';

const queryClient = new QueryClient();

const FallbackComponent = () => (
  <div>
    <h2>Unable to load component</h2>
    <p>There was an error loading the component. Please try again later.</p>
  </div>
);

export default function ComponentPreview() {
  const [DynamicComponent, setDynamicComponent] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

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

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Using dynamic import with error handling
        const module = await import('../../app/(use-page-wrapper)/video/[uid]/page');
        setDynamicComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err as Error);
      }
    };

    loadComponent();
  }, []);

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  if (error) {
    return <FallbackComponent />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18next}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                {DynamicComponent ? (
                  <DynamicComponent params={params} searchParams={searchParams} />
                ) : (
                  <div>Loading component...</div>
                )}
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}