import React from 'react';
import { useParentState } from '../useIframeState';
import { BrokenIntegrationEmail } from '../../../../packages/emails/src/templates/BrokenIntegrationEmail';

// Mock TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
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
    startTime: state.startTime.value,
    endTime: state.endTime.value,
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
      },
    ],
    location: state.location.value,
    eventTypeId: 1,
  };

  return (
    <BrokenIntegrationEmail
      calEvent={calEvent}
      attendee={calEvent.attendees[0]}
      type={state.type.value as "video" | "calendar"}
    />
  );
}