import React, { Suspense } from 'react';
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FeatureProvider } from "@calcom/features/flags/context/provider";
import { useParentState } from '../useIframeState';
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { mockedTrpc } from '../Wrapper';
import { httpBatchLink } from "@calcom/trpc";

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {}
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => Promise.resolve(true),
  back: () => Promise.resolve(true),
  forward: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
};

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/booking/[uid]/embed/page')
  .catch(error => {
    console.error('Error loading component:', error);
    return { default: () => <div>Error loading component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: Infinity } }
  });

  const trpcClient = mockedTrpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <SessionProvider>
      <I18nextProvider i18n={i18n}>
        <AppRouterContext.Provider value={mockRouter}>
          <mockedTrpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider value={{}}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent params={params} searchParams={searchParams} />
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </mockedTrpc.Provider>
        </AppRouterContext.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
}