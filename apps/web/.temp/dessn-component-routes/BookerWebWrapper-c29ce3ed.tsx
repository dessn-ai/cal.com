import React from 'react';
import { useParentState } from '../useIframeState';
import { BookerWebWrapper } from '../../../../packages/platform/atoms/booker/BookerWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventSlug: {
      type: "string",
      value: "default-event",
      label: "Event Slug",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    orgBannerUrl: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Organization Banner URL",
    },
    hideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    allowsDynamicBooking: {
      type: "boolean",
      value: true,
      label: "Allows Dynamic Booking",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
    duration: {
      type: "number",
      value: 30,
      label: "Duration",
    },
    hashedLink: {
      type: "string",
      value: null,
      label: "Hashed Link",
    },
    isInstantMeeting: {
      type: "boolean",
      value: false,
      label: "Is Instant Meeting",
    },
    teamMemberEmail: {
      type: "string",
      value: null,
      label: "Team Member Email",
    },
    userLocale: {
      type: "string",
      value: "en",
      label: "User Locale",
    },
    hasValidLicense: {
      type: "boolean",
      value: true,
      label: "Has Valid License",
    },
  });

  const entity = {
    fromRedirectOfNonOrgLink: false,
    considerUnpublished: true,
    isUnpublished: false,
    orgSlug: "myorg",
    teamSlug: null,
    name: "My Organization",
    logoUrl: "https://example.com/logo.png",
    eventTypeId: 123,
  };

  return (
    <BookerWebWrapper
      eventSlug={state.eventSlug.value}
      username={state.username.value}
      orgBannerUrl={state.orgBannerUrl.value}
      hideBranding={state.hideBranding.value}
      allowsDynamicBooking={state.allowsDynamicBooking.value}
      isTeamEvent={state.isTeamEvent.value}
      duration={state.duration.value}
      hashedLink={state.hashedLink.value}
      isInstantMeeting={state.isInstantMeeting.value}
      teamMemberEmail={state.teamMemberEmail.value}
      userLocale={state.userLocale.value}
      hasValidLicense={state.hasValidLicense.value}
      entity={entity}
    />
  );
}