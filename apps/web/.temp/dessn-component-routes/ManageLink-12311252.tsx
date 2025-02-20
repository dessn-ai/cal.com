import React from 'react';
import { useParentState } from '../useIframeState';
import { ManageLink } from '../../../../packages/emails/src/components/ManageLink';

import { CalendarEvent, Person, TimeFormat } from '@calcom/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
        organizer: {
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
        uid: '123456',
        recurringEvent: null,
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Smith',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate: (key: string) => key,
          locale: 'en',
        },
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  const calEvent: CalendarEvent = JSON.parse(state.calEvent.value);
  const attendee: Person = JSON.parse(state.attendee.value);

  return <ManageLink calEvent={calEvent} attendee={attendee} />;
}