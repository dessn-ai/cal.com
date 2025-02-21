import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/bookings/views/bookings-single-view';


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
        uid: "123456",
        responses: {},
      }),
      label: "Booking Info",
    },
    paymentStatus: {
      type: "string",
      value: null,
      label: "Payment Status",
    },
  });

  return (
    <ImportedComponent
      userTimeFormat={state.userTimeFormat.value}
      requiresLoginToUpdate={state.requiresLoginToUpdate.value}
      rescheduledToUid={state.rescheduledToUid.value}
      isLoggedInUserHost={state.isLoggedInUserHost.value}
      internalNotePresets={JSON.parse(state.internalNotePresets.value)}
      tz={state.tz.value}
      orgSlug={state.orgSlug.value}
      themeBasis={state.themeBasis.value}
      hideBranding={state.hideBranding.value}
      profile={JSON.parse(state.profile.value)}
      eventType={JSON.parse(state.eventType.value)}
      recurringBookings={JSON.parse(state.recurringBookings.value)}
      trpcState={JSON.parse(state.trpcState.value)}
      dynamicEventName={state.dynamicEventName.value}
      bookingInfo={JSON.parse(state.bookingInfo.value)}
      paymentStatus={state.paymentStatus.value}
    />
  );
}