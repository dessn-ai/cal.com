import React from 'react';
import { useParentState } from '../useIframeState';
import { NoShowFeeChargedEmail } from '../../../../packages/emails/src/templates/NoShowFeeChargedEmail';

import { TimeFormat } from '@calcom/types/Calendar';

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
          name: 'Organizer',
          email: 'organizer@example.com',
          timeZone: 'UTC',
          language: { translate: (key: string) => key, locale: 'en' },
        },
        attendees: [],
        paymentInfo: {
          amount: 1000,
          currency: 'USD',
        },
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Attendee',
        email: 'attendee@example.com',
        timeZone: 'UTC',
        language: { translate: (key: string) => key, locale: 'en' },
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = JSON.parse(state.attendee.value);

  return (
    <NoShowFeeChargedEmail
      calEvent={calEvent}
      attendee={attendee}
    />
  );
}