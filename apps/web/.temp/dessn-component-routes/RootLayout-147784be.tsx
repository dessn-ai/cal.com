import React from 'react';
import { useParentState } from '../useIframeState';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  },
  fallbackLng: 'en'
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

// Create a simplified version of the layout component
const SimplifiedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning data-nextjs-router="app">
      <head>
        <style>{`
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-cal: 'Cal Sans', sans-serif;
          }
        `}</style>
      </head>
      <body className="dark:bg-default bg-subtle antialiased">
        {children}
      </body>
    </html>
  );
};

// Create a mock context for any components that might need TRPC
const TRPCContext = React.createContext({
  client: {
    query: () => Promise.resolve(null),
    mutation: () => Promise.resolve(null)
  }
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  return (
    <SessionProvider session={null}>
      <I18nextProvider i18n={i18n}>
        <TRPCContext.Provider value={{ client: { query: () => Promise.resolve(null), mutation: () => Promise.resolve(null) } }}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider
                features={{}}
                userFeatures={{}}>
                <SimplifiedLayout>
                  {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
                </SimplifiedLayout>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </TRPCContext.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
}