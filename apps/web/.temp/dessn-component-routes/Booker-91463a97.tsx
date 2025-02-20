import React from 'react';
import { useParentState } from '../useIframeState';

// Mock AtomsWrapper component
const MockAtomsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="mock-atoms-wrapper">
      {children}
    </div>
  );
};

// Mock Booker component
const MockBooker = (props: any) => {
  return (
    <div className="mock-booker">
      <h2>Booking Preview</h2>
      <div>
        <p>Event: {props.eventSlug}</p>
        <p>Username: {props.username}</p>
        <p>Duration: {props.duration} minutes</p>
        <p>Selected Date: {props.selectedDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

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
    entity: {
      type: "dropdown",
      value: "team",
      options: ["team", "org"],
      label: "Entity Type",
    },
    month: {
      type: "string",
      value: new Date().toISOString().slice(0, 7),
      label: "Month",
    },
    selectedDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Selected Date",
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

  return (
    <MockAtomsWrapper>
      <MockBooker
        eventSlug={state.eventSlug.value}
        username={state.username.value}
        orgBannerUrl={state.orgBannerUrl.value}
        hideBranding={state.hideBranding.value}
        entity={{
          fromRedirectOfNonOrgLink: false,
          considerUnpublished: false,
          isUnpublished: false,
          orgSlug: state.entity.value === "org" ? "example-org" : null,
          teamSlug: state.entity.value === "team" ? "example-team" : null,
          name: "Example Entity",
          logoUrl: "https://example.com/logo.png",
          eventTypeId: 1,
        }}
        month={state.month.value}
        selectedDate={new Date(state.selectedDate.value)}
        allowsDynamicBooking={state.allowsDynamicBooking.value}
        isTeamEvent={state.isTeamEvent.value}
        duration={state.duration.value}
        hashedLink={state.hashedLink.value}
        isInstantMeeting={state.isInstantMeeting.value}
        userLocale={state.userLocale.value}
        hasValidLicense={state.hasValidLicense.value}
      />
    </MockAtomsWrapper>
  );
}