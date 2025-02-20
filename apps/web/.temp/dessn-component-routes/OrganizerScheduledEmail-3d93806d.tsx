import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerScheduledEmail } from '../../../../packages/emails/src/templates/OrganizerScheduledEmail';
import { SchedulingType } from "@calcom/prisma/enums";

// Mock the TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
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
        attendees: [],
        schedulingType: SchedulingType.ROUND_ROBIN,
        language: {
          locale: "en"
        }
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

  const translateFn = React.useCallback((key: string) => key, []);

  const emailProps = React.useMemo(() => ({
    calEvent: {
      ...state.calEvent.value,
      organizer: {
        ...state.calEvent.value.organizer,
        language: {
          ...state.calEvent.value.organizer.language,
          translate: translateFn
        }
      },
      language: {
        ...state.calEvent.value.language,
        translate: translateFn
      }
    },
    attendee: {
      ...state.attendee.value,
      language: {
        ...state.attendee.value.language,
        translate: translateFn
      }
    },
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value
  }), [state, translateFn]);

  return (
    <OrganizerScheduledEmail
      {...emailProps}
    />
  );
}