import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeScheduledEmail } from '../../../../packages/emails/src/templates/AttendeeScheduledEmail';

import { TimeFormat } from '@calcom/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            translate: (key: string) => key,
            locale: 'en',
          },
        },
        attendees: [],
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Doe',
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

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = JSON.parse(state.attendee.value);

  return (
    <AttendeeScheduledEmail
      calEvent={calEvent}
      attendee={attendee}
    />
  );
}