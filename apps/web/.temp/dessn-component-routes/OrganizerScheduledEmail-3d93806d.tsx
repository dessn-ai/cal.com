import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerScheduledEmail } from '../../../../packages/emails/src/templates/OrganizerScheduledEmail';

import { SchedulingType } from "@calcom/prisma/enums";
import { TimeFormat } from "@calcom/types/Calendar";

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
            translate: (key: string) => key,
            locale: "en"
          },
          timeFormat: TimeFormat.TWELVE_HOUR
        },
        attendees: [],
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
          translate: (key: string) => key,
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

  return (
    <OrganizerScheduledEmail
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
    />
  );
}