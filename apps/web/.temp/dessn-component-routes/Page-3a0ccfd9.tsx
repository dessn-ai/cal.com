import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create TRPC
const trpc = createTRPCReact();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: false,
    },
  },
});

// Lazy load the imported component
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/conferencing/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Conferencing",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your conferencing apps",
      label: "Description",
    },
    add: {
      type: "string",
      value: "Add",
      label: "Add Button Text",
    },
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => state[key as keyof typeof state]?.value || key;

  // Mock the ConferencingAppsViewWebWrapper component
  const MockConferencingAppsViewWebWrapper = ({ title, description, add }: { title: string, description: string, add: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{add}</button>
    </div>
  );

  return (
    <SessionProvider session={null}>
      <I18nextProvider i18n={i18n}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <ImportedComponent
                    getTranslate={mockGetTranslate}
                    ConferencingAppsViewWebWrapper={MockConferencingAppsViewWebWrapper}
                  />
                </Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </trpc.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
}