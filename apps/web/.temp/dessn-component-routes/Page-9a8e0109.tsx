import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Configure i18next
i18next.init({
  lng: 'en',
  resources: {},
});

// Create a client with proper configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ErrorFallback = () => (
  <div className="error-boundary">
    Failed to load component. Please try again.
  </div>
);

const LoadingFallback = () => (
  <div className="loading">
    Loading...
  </div>
);

export default function ComponentPreview() {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<Error | null>(null);

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

  useEffect(() => {
    import('../../pages/org/[orgSlug]/[user]/[type]/embed')
      .then((module) => {
        setComponent(() => module.default || module);
      })
      .catch((err) => {
        console.error('Failed to load component:', err);
        setError(err);
      });
  }, []);

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

  if (error) {
    return <ErrorFallback />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback={<LoadingFallback />}>
          {Component ? <Component {...props} /> : <LoadingFallback />}
        </Suspense>
      </I18nextProvider>
    </QueryClientProvider>
  );
}