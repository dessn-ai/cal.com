import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Mock Component instead of importing
const MockComponent = (props) => {
  return (
    <div className="mock-embed">
      <h1>Embed Preview</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock TRPC
const mockTrpc = createTRPCReact();

// Create a minimal mock client
const mockTrpcClient = mockTrpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
      // Add headers if needed
      headers() {
        return {};
      },
    }),
  ],
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    eventData: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        length: 60,
        metadata: {},
        entity: { name: "Test Entity" },
        title: "Test Event",
        hidden: false,
        profile: {
          image: "https://example.com/image.jpg",
          name: "John Doe",
          username: "johndoe",
        },
        users: [
          { username: "user1", name: "User One" },
          { username: "user2", name: "User Two" },
        ],
      }),
      label: "Event Data",
    },
    rescheduleUid: {
      type: "string",
      value: null,
      label: "Reschedule UID",
    },
    bookingUid: {
      type: "string",
      value: null,
      label: "Booking UID",
    },
    user: {
      type: "string",
      value: "testuser",
      label: "User",
    },
    slug: {
      type: "string",
      value: "test-slug",
      label: "Slug",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
    themeBasis: {
      type: "string",
      value: null,
      label: "Theme Basis",
    },
    orgBannerUrl: {
      type: "string",
      value: null,
      label: "Org Banner URL",
    },
  });

  const props = {
    isEmbed: state.isEmbed.value,
    eventData: JSON.parse(state.eventData.value),
    rescheduleUid: state.rescheduleUid.value,
    bookingUid: state.bookingUid.value,
    user: state.user.value,
    slug: state.slug.value,
    isBrandingHidden: state.isBrandingHidden.value,
    isSEOIndexable: state.isSEOIndexable.value,
    themeBasis: state.themeBasis.value,
    orgBannerUrl: state.orgBannerUrl.value,
    trpcState: {},
  };

  return (
    <SessionProvider session={null}>
      <I18nextProvider i18n={{ language: 'en' }}>
        <mockTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <MockComponent {...props} />
                </Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </mockTrpc.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
}