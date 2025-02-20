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
            locale: 'en',
            translate: 'no-op-translate'
          }
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en',
              translate: 'no-op-translate'
            }
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
        }
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

  // Wrap the component in an error boundary
  try {
    return (
      <OrganizerPaymentRefundFailedEmail
        calEvent={{
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
        }}
        attendee={{
          ...state.attendee.value,
          language: {
            ...state.attendee.value.language,
            translate: (key: string) => key
          }
        }}
        timeZone={state.timeZone.value}
        timeFormat={state.timeFormat.value}
      />
    );
  } catch (error) {
    console.error('Error rendering email preview:', error);
    return <div>Error rendering email preview. Please check the console for details.</div>;
  }
}