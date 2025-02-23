import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestedToRescheduleEmail } from '../../../../packages/emails/src/templates/OrganizerRequestedToRescheduleEmail';

import { TimeFormat } from '../../../../packages/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'John Organizer',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: {
            translate: (key: string, params: any) => `Translated: ${key}`,
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'Jane Attendee',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate: (key: string, params: any) => `Translated: ${key}`,
              locale: 'en',
            },
          },
        ],
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Attendee',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate: (key: string, params: any) => `Translated: ${key}`,
          locale: 'en',
        },
      }),
      label: 'Attendee',
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone',
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: 'Time Format',
    },
  });

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  return (
    <OrganizerRequestedToRescheduleEmail
      calEvent={parsedCalEvent}
      attendee={parsedAttendee}
      timeZone={state.timeZone.value}
      timeFormat={state.timeFormat.value as TimeFormat}
    />
  );
}