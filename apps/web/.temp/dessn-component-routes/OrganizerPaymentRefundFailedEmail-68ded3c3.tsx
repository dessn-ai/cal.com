import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerPaymentRefundFailedEmail } from '../../../../packages/emails/src/templates/OrganizerPaymentRefundFailedEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

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
            locale: 'en',
            translate: 'no-op-translate'
          },
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en',
              translate: 'no-op-translate'
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
          locale: 'en',
          translate: 'no-op-translate'
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

  // Transform the state before passing it to the component
  const transformedCalEvent = {
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate: (key: string) => key,
      },
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate: (key: string) => key,
      },
    })),
  };

  const transformedAttendee = {
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate: (key: string) => key,
    },
  };

  return (
    <Suspense fallback="Loading...">
      <OrganizerPaymentRefundFailedEmail
        calEvent={transformedCalEvent}
        attendee={transformedAttendee}
        timeZone={state.timeZone.value}
        timeFormat={state.timeFormat.value}
      />
    </Suspense>
  );
}