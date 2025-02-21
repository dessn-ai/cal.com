import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/users/views/users-public-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    profileName: {
      type: "string",
      value: "John Doe",
      label: "Profile Name",
    },
    profileImage: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Profile Image",
    },
    profileTheme: {
      type: "string",
      value: "light",
      label: "Profile Theme",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
  });

  const mockProps = {
    trpcState: {},
    profile: {
      name: state.profileName.value,
      image: state.profileImage.value,
      theme: state.profileTheme.value,
      brandColor: "#000000",
      darkBrandColor: "#FFFFFF",
      organization: null,
      allowSEOIndexing: true,
      username: state.username.value,
    },
    users: [{
      name: state.profileName.value,
      username: state.username.value,
      bio: "A mock bio",
      verified: true,
      avatarUrl: state.profileImage.value,
      profile: {
        id: 1,
        upId: "123",
        username: state.username.value,
        organizationId: null,
        organization: null,
      },
    }],
    themeBasis: null,
    markdownStrippedBio: "A mock bio",
    safeBio: "<p>A mock bio</p>",
    entity: {
      considerUnpublished: false,
    },
    eventTypes: [{
      id: 1,
      title: "Mock Event",
      slug: "mock-event",
      length: 30,
      hidden: false,
      lockTimeZoneToggleOnBookingPage: false,
      requiresConfirmation: false,
      canSendCalVideoTranscriptionEmails: false,
      requiresBookerEmailVerification: false,
      price: 0,
      currency: "USD",
      recurringEvent: null,
      descriptionAsSafeHTML: "<p>A mock event description</p>",
      metadata: {},
    }],
    isOrgSEOIndexable: true,
    isEmbed: state.isEmbed.value,
  };

  return <ImportedComponent {...mockProps} />;
}