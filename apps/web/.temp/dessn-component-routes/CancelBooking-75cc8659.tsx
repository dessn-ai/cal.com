import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/booking/CancelBooking';

// Define Frequency enum locally for preview purposes
enum Frequency {
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY"
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "object",
      value: {
        title: "Sample Booking",
        uid: "sample-uid",
        id: 1
      },
      label: "Booking"
    },
    profile: {
      type: "object",
      value: {
        name: "John Doe",
        slug: "john-doe"
      },
      label: "Profile"
    },
    recurringEvent: {
      type: "object",
      value: {
        interval: 1,
        count: 5,
        freq: Frequency.WEEKLY
      },
      label: "Recurring Event"
    },
    team: {
      type: "string",
      value: "Sample Team",
      label: "Team"
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID"
    },
    theme: {
      type: "string",
      value: "light",
      label: "Theme"
    },
    allRemainingBookings: {
      type: "boolean",
      value: false,
      label: "All Remaining Bookings"
    },
    seatReferenceUid: {
      type: "string",
      value: "seat-ref-uid",
      label: "Seat Reference UID"
    },
    currentUserEmail: {
      type: "string",
      value: "user@example.com",
      label: "Current User Email"
    },
    isHost: {
      type: "boolean",
      value: true,
      label: "Is Host"
    }
  });

  const bookingCancelledEventProps = {
    booking: {},
    organizer: {
      name: "Organizer Name",
      email: "organizer@example.com",
      timeZone: "UTC"
    },
    eventType: {}
  };

  const internalNotePresets = [
    { id: 1, name: "Preset 1", cancellationReason: "Reason 1" },
    { id: 2, name: "Preset 2", cancellationReason: "Reason 2" }
  ];

  return (
    <ImportedComponent
      booking={state.booking.value}
      profile={state.profile.value}
      recurringEvent={state.recurringEvent.value}
      team={state.team.value}
      teamId={state.teamId.value}
      setIsCancellationMode={() => {}}
      theme={state.theme.value}
      allRemainingBookings={state.allRemainingBookings.value}
      seatReferenceUid={state.seatReferenceUid.value}
      currentUserEmail={state.currentUserEmail.value}
      bookingCancelledEventProps={bookingCancelledEventProps}
      isHost={state.isHost.value}
      internalNotePresets={internalNotePresets}
    />
  );
}