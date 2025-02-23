import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestEmail } from '../../../../packages/emails/src/templates/OrganizerRequestEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        uid: 'event-123',
        title: 'Meeting with John',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
        organizer: {
          id: 1,
          name: 'Jane Doe',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            translate: (key: string) => key,
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'John Smith',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate: (key: string) => key,
              locale: 'en',
            },
          },
        ],
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Smith',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate: (key: string) => key,
          locale: 'en',
        },
      },
      label: 'Attendee',
    },
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat',
    },
    attendeeCancelled: {
      type: 'boolean',
      value: false,
      label: 'Attendee Cancelled',
    },
  });

  return (
    <OrganizerRequestEmail
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
    />
  );
}