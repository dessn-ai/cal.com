import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/bookings/views/bookings-single-view';

// Create a custom hook to provide router query values
const useCustomRouterQuery = () => {
  return {
    uid: "sample-booking-123",
    email: "attendee@example.com",
    eventTypeSlug: "default",
    cancel: "false",
    allRemainingBookings: "false",
    changes: "false",
    reschedule: "false",
    isSuccessBookingPage: "true",
    formerTime: null,
    seatReferenceUid: null,
    rating: null,
    noShow: "false"
  };
};

// Override the original useRouterQuery hook
const originalModule = require('@calcom/lib/hooks/useRouterQuery');
originalModule.useRouterQuery = useCustomRouterQuery;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userTimeFormat: {
      type: "number",
      value: 24,
      label: "User Time Format",
    },
    requiresLoginToUpdate: {
      type: "boolean",
      value: false,
      label: "Requires Login to Update",
    },
    rescheduledToUid: {
      type: "string",
      value: null,
      label: "Rescheduled To UID",
    },
    isLoggedInUserHost: {
      type: "boolean",
      value: true,
      label: "Is Logged In User Host",
    },
    internalNotePresets: {
      type: "string",
      value: "[]",
      label: "Internal Note Presets",
    },
    tz: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
    orgSlug: {
      type: "string",
      value: null,
      label: "Organization Slug",
    },
    themeBasis: {
      type: "string",
      value: "light",
      label: "Theme Basis",
    },
    hideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    profile: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        theme: "light",
        brandColor: "#000000",
        darkBrandColor: "#ffffff",
        slug: "johndoe",
      }),
      label: "Profile",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        title: "Sample Event",
        description: "This is a sample event",
        length: 60,
        recurringEvent: null,
        requiresConfirmation: false,
        metadata: {},
        owner: { id: 123 },
        bookingFields: [],
        isDynamic: false,
      }),
      label: "Event Type",
    },
    recurringBookings: {
      type: "string",
      value: "[]",
      label: "Recurring Bookings",
    },
    trpcState: {
      type: "string",
      value: "{}",
      label: "TRPC State",
    },
    dynamicEventName: {
      type: "string",
      value: "Sample Dynamic Event",
      label: "Dynamic Event Name",
    },
    bookingInfo: {
      type: "string",
      value: JSON.stringify({
        uid: "sample-booking-123",
        id: 123,
        title: "Sample Booking",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        attendees: [
          {
            email: "attendee@example.com",
            name: "Test Attendee",
            timeZone: "America/New_York"
          }
        ],
        user: {
          name: "John Host",
          email: "host@example.com",
          timeZone: "America/New_York"
        },
        userPrimaryEmail: "host@example.com",
        responses: {
          name: "Test Response",
          email: "test@example.com"
        },
        location: "Online",
        status: "ACCEPTED",
        seatsReferences: [],
        metadata: {},
        description: "Test booking description",
      }),
      label: "Booking Info",
    },
    paymentStatus: {
      type: "string",
      value: null,
      label: "Payment Status",
    },
  });

  const bookingInfo = JSON.parse(state.bookingInfo.value);
  const eventType = JSON.parse(state.eventType.value);
  const profile = JSON.parse(state.profile.value);

  return (
    <ImportedComponent
      bookingInfo={bookingInfo}
      eventType={eventType}
      profile={profile}
      userTimeFormat={state.userTimeFormat.value}
      requiresLoginToUpdate={state.requiresLoginToUpdate.value}
      rescheduledToUid={state.rescheduledToUid.value}
      isLoggedInUserHost={state.isLoggedInUserHost.value}
      internalNotePresets={JSON.parse(state.internalNotePresets.value)}
      tz={state.tz.value}
      orgSlug={state.orgSlug.value}
      themeBasis={state.themeBasis.value}
      hideBranding={state.hideBranding.value}
      recurringBookings={JSON.parse(state.recurringBookings.value)}
      trpcState={JSON.parse(state.trpcState.value)}
      dynamicEventName={state.dynamicEventName.value}
      paymentStatus={state.paymentStatus.value}
      uid={bookingInfo.uid}
      query={useCustomRouterQuery()}
    />
  );
}