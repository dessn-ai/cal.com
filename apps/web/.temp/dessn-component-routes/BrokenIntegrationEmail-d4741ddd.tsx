import React from 'react';
import { useParentState } from '../useIframeState';
import { BrokenIntegrationEmail } from '../../../../packages/emails/src/templates/BrokenIntegrationEmail';

// Mock TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24,
}

// Create a simple date formatter function
function formatDateTime(date: string | Date, timeZone: string = 'America/New_York') {
  const d = new Date(date);
  return {
    toString: () => d.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone
    }),
    format: () => d.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone
    }),
    tz: () => ({
      format: () => d.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone
      })
    })
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "video",
      options: ["video", "calendar"],
      label: "Integration Type",
    },
    eventTitle: {
      type: "string",
      value: "Meeting with John Doe",
      label: "Event Title",
    },
    startTime: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Time",
    },
    endTime: {
      type: "string",
      value: new Date(Date.now() + 3600000).toISOString(),
      label: "End Time",
    },
    attendeeName: {
      type: "string",
      value: "Jane Smith",
      label: "Attendee Name",
    },
    attendeeEmail: {
      type: "string",
      value: "jane@example.com",
      label: "Attendee Email",
    },
    organizerName: {
      type: "string",
      value: "John Doe",
      label: "Organizer Name",
    },
    organizerEmail: {
      type: "string",
      value: "john@example.com",
      label: "Organizer Email",
    },
    location: {
      type: "string",
      value: "Zoom",
      label: "Location",
    },
  });

  const calEvent = {
    type: "default",
    title: state.eventTitle.value,
    startTime: formatDateTime(state.startTime.value),
    endTime: formatDateTime(state.endTime.value),
    organizer: {
      name: state.organizerName.value,
      email: state.organizerEmail.value,
      timeZone: "America/New_York",
      language: {
        translate: (key: string) => key,
        locale: "en",
      },
      timeFormat: TimeFormat.TWELVE_HOUR,
    },
    attendees: [
      {
        name: state.attendeeName.value,
        email: state.attendeeEmail.value,
        timeZone: "America/New_York",
        language: {
          translate: (key: string) => key,
          locale: "en",
        },
        timeFormat: TimeFormat.TWELVE_HOUR,
      },
    ],
    location: state.location.value,
    eventTypeId: 1,
    uid: "unique-event-id",
    destinationCalendar: null,
    recurringEvent: null,
    responses: {},
    userFieldsResponses: {},
    seatsPerTimeSlot: null,
    seatsShowAttendees: false,
    seatsShowAvailableSeats: false,
    requiresConfirmation: false,
    currency: "USD",
    length: 60,
    metadata: {},
    bookingFields: [],
    additionalNotes: "",
    customInputs: {},
    description: null,
    hideCalendarNotes: false,
    language: {
      translate: (key: string) => key,
      locale: "en",
    },
  };

  try {
    return (
      <BrokenIntegrationEmail
        calEvent={calEvent}
        attendee={calEvent.attendees[0]}
        type={state.type.value as "video" | "calendar"}
      />
    );
  } catch (error) {
    console.error('Render error:', error);
    return <div>Error rendering email template: {error.message}</div>;
  }
}