import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[user]/[type]/embed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventData: {
      type: "object",
      value: {
        id: 1,
        length: 60,
        metadata: {},
        entity: {},
        title: "Sample Event",
        hidden: false,
        profile: {
          image: "https://example.com/image.jpg",
          name: "John Doe",
          username: "johndoe"
        },
        users: [
          {
            username: "johndoe",
            name: "John Doe"
          }
        ]
      },
      label: "Event Data"
    },
    rescheduleUid: {
      type: "string",
      value: null,
      label: "Reschedule UID"
    },
    bookingUid: {
      type: "string",
      value: null,
      label: "Booking UID"
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User"
    },
    slug: {
      type: "string",
      value: "sample-event",
      label: "Slug"
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden"
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable"
    },
    themeBasis: {
      type: "string",
      value: null,
      label: "Theme Basis"
    },
    orgBannerUrl: {
      type: "string",
      value: null,
      label: "Org Banner URL"
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed"
    }
  });

  const mockTrpcState = {
    queries: [],
    mutations: [],
    subscriptions: [],
    context: {}
  };

  return (
    <ImportedComponent
      eventData={state.eventData.value}
      rescheduleUid={state.rescheduleUid.value}
      bookingUid={state.bookingUid.value}
      user={state.user.value}
      slug={state.slug.value}
      trpcState={mockTrpcState}
      isBrandingHidden={state.isBrandingHidden.value}
      isSEOIndexable={state.isSEOIndexable.value}
      themeBasis={state.themeBasis.value}
      orgBannerUrl={state.orgBannerUrl.value}
      isEmbed={state.isEmbed.value}
    />
  );
}