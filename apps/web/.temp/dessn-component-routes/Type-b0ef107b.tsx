import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/users/views/users-type-public-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-event",
      label: "Slug",
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    orgBannerUrl: {
      type: "string",
      value: null,
      label: "Org Banner URL",
    },
  });

  const mockEventData = {
    id: 1,
    length: 60,
    metadata: {
      multipleDuration: [30, 60, 90],
    },
    entity: {
      name: "Example Entity",
    },
    title: "Example Event",
    hidden: false,
    profile: {
      image: "https://example.com/image.jpg",
      name: "John Doe",
      username: "johndoe",
    },
    users: [
      {
        username: "johndoe",
        name: "John Doe",
      },
    ],
  };

  return (
    <ImportedComponent
      slug={state.slug.value}
      user={state.user.value}
      isEmbed={state.isEmbed.value}
      isBrandingHidden={state.isBrandingHidden.value}
      orgBannerUrl={state.orgBannerUrl.value}
      eventData={mockEventData}
      booking={undefined}
      rescheduleUid={null}
      bookingUid={null}
      trpcState={{}}
      isSEOIndexable={true}
      themeBasis={null}
    />
  );
}