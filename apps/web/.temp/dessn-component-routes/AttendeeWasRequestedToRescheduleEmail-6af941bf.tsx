import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeWasRequestedToRescheduleEmail } from '../../../../packages/emails/src/templates/AttendeeWasRequestedToRescheduleEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    rescheduleLink: {
      type: "string",
      value: "https://example.com/reschedule",
      label: "Reschedule Link",
    },
    attendeeName: {
      type: "string",
      value: "John Doe",
      label: "Attendee Name",
    },
    attendeeEmail: {
      type: "string",
      value: "john@example.com",
      label: "Attendee Email",
    },
    organizerName: {
      type: "string",
      value: "Jane Smith",
      label: "Organizer Name",
    },
    eventTitle: {
      type: "string",
      value: "Team Meeting",
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
  });

  const mockProps = {
    metadata: {
      rescheduleLink: state.rescheduleLink.value,
    },
    calEvent: {
      type: "default",
      title: state.eventTitle.value,
      startTime: state.startTime.value,
      endTime: state.endTime.value,
      organizer: {
        name: state.organizerName.value,
        email: "jane@example.com",
        timeZone: "UTC",
        language: {
          translate: (key: string) => key,
          locale: "en",
        },
      },
      attendees: [{
        name: state.attendeeName.value,
        email: state.attendeeEmail.value,
        timeZone: "UTC",
        language: {
          translate: (key: string) => key,
          locale: "en",
        },
      }],
    },
    attendee: {
      name: state.attendeeName.value,
      email: state.attendeeEmail.value,
      timeZone: "UTC",
      language: {
        translate: (key: string) => key,
        locale: "en",
      },
    },
  };

  return <AttendeeWasRequestedToRescheduleEmail {...mockProps} />;
}