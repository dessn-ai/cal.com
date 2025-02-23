import React from 'react';
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
            locale: 'en'
          }
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en'
            }
          }
        ],
        paymentInfo: {
          reason: 'Payment gateway error',
          id: 'PAY-123456'
        }
      },
      label: 'Calendar Event'
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en'
        }
      },
      label: 'Attendee'
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone'
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: 'Time Format'
    }
  });

  // Create a wrapper component that adds the translate function to the language objects
  const enhancedCalEvent = {
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate: (key: string) => key
      }
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate: (key: string) => key
      }
    }))
  };

  const enhancedAttendee = {
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate: (key: string) => key
    }
  };

  return (
    <OrganizerPaymentRefundFailedEmail
      calEvent={enhancedCalEvent}
      attendee={enhancedAttendee}
      timeZone={state.timeZone.value}
      timeFormat={state.timeFormat.value}
    />
  );
}