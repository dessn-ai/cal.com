import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import { FeatureProvider } from "@calcom/features/flags/context/provider";
import { mockedTrpc } from '../Wrapper';
import { httpBatchLink } from "@calcom/trpc";
import Bookings from '../../modules/bookings/views/bookings-listing-view';

// Initialize i18n
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      common: {},
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "unconfirmed", "recurring", "past", "cancelled"],
      label: "Status",
    },
  });

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
      },
    }
  }));

  const [trpcClient] = useState(() =>
    mockedTrpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    })
  );

  return (
    <I18nextProvider i18n={i18n}>
      <mockedTrpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider value={{}}>
              <div className="w-full">
                <Bookings status={state.status.value} />
              </div>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </mockedTrpc.Provider>
    </I18nextProvider>
  );
}