import React from 'react';
import { useParentState } from '../useIframeState';
import { ManageLink } from '../../../../packages/emails/src/components/ManageLink';

import { TimeFormat } from '@calcom/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
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
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate: (key: string) => key,
              locale: 'en',
            },
          },
        ],
        uid: '12345',
        recurringEvent: null,
        team: {
          name: 'Team A',
          members: [],
          id: 1,
        },
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate: (key: string) => key,
          locale: 'en',
        },
        timeFormat: TimeFormat.TWELVE_HOUR,
      },
      label: 'Attendee',
    },
  });

  return <ManageLink calEvent={state.calEvent.value} attendee={state.attendee.value} />;
}