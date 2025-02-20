import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

const queryClient = new QueryClient();

const LazyComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/installation/[[...step]]/page')
  .catch(error => ({
    default: () => (
      <div>Error loading component: {error.message}</div>
    )
  }))
);

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (hasError) {
      console.error('Error in component:', error);
    }
  }, [hasError, error]);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ step: ['1'] }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: 'test' }),
      label: "Search Params",
    },
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Initializing...</div>;
  }

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { step: ['1'] };
    searchParams = { query: 'test' };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading component...</div>}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={null}>
            <I18nextProvider i18n={{
              language: 'en',
              resources: {},
              t: (key) => key,
            } as any}>
              <TooltipProvider>
                <FeatureProvider>
                  <LazyComponent params={params} searchParams={searchParams} />
                </FeatureProvider>
              </TooltipProvider>
            </I18nextProvider>
          </SessionProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}