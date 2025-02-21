import React from 'react';
import { useParentState } from '../useIframeState';
import { NoShowFeeChargedEmail } from '../../../../packages/emails/src/templates/NoShowFeeChargedEmail';

// Mock the TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 'h:mma',
  TWENTY_FOUR_HOUR = 'HH:mm'
}

// Mock WhenInfo component
const WhenInfo = ({ calEvent, timeZone, locale, timeFormat }) => {
  const startDate = new Date(calEvent.startTime);
  const endDate = new Date(calEvent.endTime);
  
  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone,
    });
  };

  return (
    <div>
      <div>
        <strong>When: </strong>
        {formatDate(startDate)} - {formatDate(endDate)} ({timeZone})
      </div>
    </div>
  );
};

// Create a simple translation function
const createTranslateFunction = () => {
  return function translate(key: string, vars?: Record<string, any>) {
    const translations: Record<string, string> = {
      "no_show_fee_charged_text_body": "No-show fee charged",
      "no_show_fee_charged_subtitle": `A no-show fee of ${vars?.amount || 0} ${vars?.formatParams?.amount?.currency || 'USD'} has been charged`,
      "when": "When",
      "starting": "Starting",
      "meeting_with_user": "Meeting with {0}",
      "meeting": "Meeting",
      "emailed_you_and_any_other_attendees": "emailed you and any other attendees."
    };
    return translations[key] || key;
  };
};

// Override the imported WhenInfo component
NoShowFeeChargedEmail.WhenInfo = WhenInfo;

export default function ComponentPreview() {
  const translate = React.useMemo(() => createTranslateFunction(), []);

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
          language: { 
            translate,
            locale: 'en'
          },
        },
        attendees: [{
          name: 'Attendee',
          email: 'attendee@example.com',
          timeZone: 'UTC',
          language: {
            translate,
            locale: 'en'
          },
          timeFormat: TimeFormat.TWELVE_HOUR
        }],
        paymentInfo: {
          amount: 1000,
          currency: 'USD',
        },
        uid: 'test-uid',
        recurringEvent: null,
        cancellationReason: null,
        userFieldsResponses: {},
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Attendee',
        email: 'attendee@example.com',
        timeZone: 'UTC',
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      translate,
      locale: 'en'
    }
  };

  return (
    <NoShowFeeChargedEmail
      calEvent={calEvent}
      attendee={attendee}
      t={translate}
      locale="en"
      timeFormat={TimeFormat.TWELVE_HOUR}
    />
  );
}