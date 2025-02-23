import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "example-token" }),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  const [Component, setComponent] = React.useState<any>(null);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    import('../../app/(use-page-wrapper)/(main-nav)/teams/page')
      .then((module) => {
        setComponent(() => module.default);
      })
      .catch((err) => {
        console.error('Failed to load component:', err);
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error loading component: {error.message}</div>;
  }

  return (
    <SessionProvider session={{ user: { name: "Test User" } }}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider>
              <React.Suspense fallback={<div>Loading...</div>}>
                {Component ? <Component {...props} /> : <div>Loading component...</div>}
              </React.Suspense>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}