import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerScheduledEmail } from '../../../../packages/emails/src/templates/OrganizerScheduledEmail';

// Define enums locally instead of importing from external packages
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

enum SchedulingType {
  ROUND_ROBIN = "ROUND_ROBIN",
  COLLECTIVE = "COLLECTIVE",
  MANAGED = "MANAGED"
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "object",
      value: {
        type: "default",
        title: "Meeting with John Doe",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: "Jane Organizer",
          email: "jane@example.com",
          timeZone: "America/New_York",
          language: {
            locale: "en"
          },
          timeFormat: TimeFormat.TWELVE_HOUR
        },
        attendees: [{
          name: "John Attendee",
          email: "john@example.com",
          timeZone: "Europe/London",
          language: {
            locale: "en"
          }
        }],
        schedulingType: SchedulingType.ROUND_ROBIN
      },
      label: "Calendar Event"
    },
    attendee: {
      type: "object",
      value: {
        name: "John Attendee",
        email: "john@example.com",
        timeZone: "Europe/London",
        language: {
          locale: "en"
        }
      },
      label: "Attendee"
    },
    newSeat: {
      type: "boolean",
      value: false,
      label: "New Seat"
    },
    attendeeCancelled: {
      type: "boolean",
      value: false,
      label: "Attendee Cancelled"
    }
  });

  // Create a mock translation function for the components that need it
  const mockTranslate = (key: string) => key;

  // Add the translate function to the necessary objects before passing to the component
  const calEventWithTranslate = {
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate: mockTranslate
      }
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate: mockTranslate
      }
    }))
  };

  const attendeeWithTranslate = {
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate: mockTranslate
    }
  };

  return (
    <OrganizerScheduledEmail
      calEvent={calEventWithTranslate}
      attendee={attendeeWithTranslate}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
    />
  );
}