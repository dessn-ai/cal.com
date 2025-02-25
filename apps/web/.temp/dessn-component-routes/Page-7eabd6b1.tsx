import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Create instances
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {},
    },
  },
});

// Mock components
const EventTypes = () => <div>Event Types Component</div>;
const EventTypesCTA = () => <div>Event Types CTA</div>;
const ShellMainAppDir = ({ children, heading, subtitle, CTA }) => (
  <div>
    <h1>{heading}</h1>
    <p>{subtitle}</p>
    {CTA}
    {children}
  </div>
);

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  return children;
};

// Mock functions and data
const mockGetTranslate = () => (key: string) => key;
const mockSession = { user: { id: '1' } };

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

  const mockProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MockTRPCProvider>
        <TooltipProvider>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Loading...</div>}>
              <ShellMainAppDir
                heading="Event Types"
                subtitle="Create and manage event types"
                CTA={<EventTypesCTA />}>
                <EventTypes />
              </ShellMainAppDir>
            </Suspense>
          </I18nextProvider>
        </TooltipProvider>
      </MockTRPCProvider>
    </QueryClientProvider>
  );
}

// Mock any required global objects
if (typeof window !== 'undefined') {
  window.fetch = window.fetch || (() => Promise.resolve(new Response()));
}

// Mock TRPC client
const trpc = {
  useQuery: () => ({
    data: null,
    isLoading: false,
    error: null
  }),
  useMutation: () => ({
    mutate: async () => {},
    isLoading: false,
    error: null
  })
};

// Export mocked TRPC for components that might need it
export { trpc };