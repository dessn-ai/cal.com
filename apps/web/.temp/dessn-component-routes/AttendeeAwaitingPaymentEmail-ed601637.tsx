import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeAwaitingPaymentEmail } from '../../../../packages/emails/src/templates/AttendeeAwaitingPaymentEmail';

import { TimeFormat } from '../../../../packages/types/Calendar';

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
        paymentInfo: {
          link: 'https://example.com/payment',
          paymentOption: 'HOLD',
        },
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
      }),
      label: 'Attendee',
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone',
    },
    includeAppsStatus: {
      type: 'boolean',
      value: false,
      label: 'Include Apps Status',
    },
    locale: {
      type: 'string',
      value: 'en',
      label: 'Locale',
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: false,
      label: 'Is Organizer',
    },
  });

  const t = (key: string) => key;

  return (
    <AttendeeAwaitingPaymentEmail
      calEvent={JSON.parse(state.calEvent.value)}
      attendee={JSON.parse(state.attendee.value)}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={t}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}