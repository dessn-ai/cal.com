import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerPaymentRefundFailedEmail } from '../../../../packages/emails/src/templates/OrganizerPaymentRefundFailedEmail';

import { TimeFormat } from '../../../../packages/types/Calendar';

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
        paymentInfo: {
          reason: 'Payment gateway error',
          id: 'PAY-123456',
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
      },
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

  return (
    <OrganizerPaymentRefundFailedEmail
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      timeZone={state.timeZone.value}
      timeFormat={state.timeFormat.value}
    />
  );
}