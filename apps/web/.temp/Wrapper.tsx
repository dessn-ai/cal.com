
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import { SessionProvider } from "next-auth/react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useState, type PropsWithChildren } from "react";
import { initReactI18next, I18nextProvider } from "react-i18next";

import { FeatureProvider } from "@calcom/features/flags/context/provider";
import { httpBatchLink } from "@calcom/trpc";
import type { AppRouter } from "@calcom/trpc/server/routers/_app";

import { createTRPCReact } from "@trpc/react-query";

import enCommon from "../public/static/locales/en/common.json";
import "../styles/globals.css";

// Initialize i18n
const ns = ["common"];
const supportedLngs = ["en"];

const resources = {
  en: {
    common: enCommon,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  defaultNS: "common",
  ns,
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: true },
  resources,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockedTrpc: any = createTRPCReact<AppRouter>();

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

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } }));

  const [trpcClient] = useState(() =>
    mockedTrpc.createClient({
      links: [httpBatchLink({ url: "" })],
    })
  );

  return (
    <SessionProvider>
      <I18nextProvider i18n={i18n}>
        <AppRouterContext.Provider value={mockRouter}>
          <mockedTrpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider value={{}}>{children}</FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </mockedTrpc.Provider>
        </AppRouterContext.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
