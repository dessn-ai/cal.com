import React, { Suspense } from 'react';
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FeatureProvider } from "@calcom/features/flags/context/provider";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createTRPCReact } from "@trpc/react-query";
import { useParentState } from '../useIframeState';

// Initialize i18n
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      common: {}
    }
  },
  react: { 
    useSuspense: false 
  }
});

// Create TRPC
const mockedTrpc = createTRPCReact();

// Mock router configuration
const mockRouter = {
  basePath: "",
  pathname: "/settings/teams/[id]/event-type",
  route: "/settings/teams/[id]/event-type",
  asPath: "/settings/teams/[id]/event-type",
  query: { id: "default" },
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

const SafeComponent = () => {
  try {
    // Using require instead of import
    const Component = require('../../app/(use-page-wrapper)/settings/teams/[id]/event-type/page').default;
    return <Component />;
  } catch (error) {
    console.error('Failed to load component:', error);
    return <div>Failed to load component</div>;
  }
};

export default function ComponentPreview() {
  const [state] = useParentState({});
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });

  const trpcClient = mockedTrpc.createClient({
    links: [],
  });

  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={i18n}>
            <AppRouterContext.Provider value={mockRouter}>
              <mockedTrpc.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                  <TooltipProvider>
                    <FeatureProvider value={{}}>
                      <SafeComponent />
                    </FeatureProvider>
                  </TooltipProvider>
                </QueryClientProvider>
              </mockedTrpc.Provider>
            </AppRouterContext.Provider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </div>
  );
}