import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/org/[orgSlug]/[user]/[type]/embed';


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

  return <ImportedComponent {...props} />;
}