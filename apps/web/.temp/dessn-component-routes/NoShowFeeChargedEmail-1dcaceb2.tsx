import React from 'react';
import { useParentState } from '../useIframeState';
import { NoShowFeeChargedEmail } from '../../../../packages/emails/src/templates/NoShowFeeChargedEmail';

// Mock the TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 'h:mma',
  TWENTY_FOUR_HOUR = 'HH:mm'
}

const translations = {
  "no_show_fee_charged_text_body": "No-show fee charged",
  "no_show_fee_charged_subtitle": "A no-show fee of {amount} {currency} has been charged",
  "email_subject_no_show": "No-show fee charged for {title}",
  "meeting_request_title": "Meeting Request",
  "meeting_request_subtitle": "Meeting Request Details",
  "emailed_you_and_any_other_attendees": "Emailed you and any other attendees",
  "when": "When",
  "starting": "Starting",
  "meeting_with_user": "Meeting with {name}",
  "meeting_details": "Meeting Details",
};

function createTranslateFunction() {
  function translate(key: string, vars: Record<string, any> = {}) {
    let text = translations[key] || key;
    
    // Handle all variable replacements
    Object.entries(vars).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
        text = text.replace(`{${key}}`, String(value));
      }
    });
    
    // Handle nested format params
    if (vars.formatParams?.amount?.currency) {
      text = text.replace("{currency}", vars.formatParams.amount.currency);
    }
    
    return text;
  }
  
  // Ensure the function has a name property
  Object.defineProperty(translate, 'name', { value: 'translate' });
  return translate;
}

export default function ComponentPreview() {
  const translate = React.useMemo(() => createTranslateFunction(), []);

  const baseEventData = {
    type: 'default',
    title: 'Meeting',
    startTime: new Date('2024-01-20T10:00:00Z').toISOString(),
    endTime: new Date('2024-01-20T11:00:00Z').toISOString(),
    organizer: {
      name: 'Organizer',
      email: 'organizer@example.com',
      timeZone: 'America/New_York',
      language: { translate, locale: 'en' },
    },
    attendees: [{
      name: 'Attendee',
      email: 'attendee@example.com',
      timeZone: 'America/New_York',
      language: { translate, locale: 'en' },
      timeFormat: TimeFormat.TWELVE_HOUR,
    }],
    paymentInfo: {
      amount: 1000,
      currency: 'USD',
    },
    uid: 'test-uid',
    length: 60,
    bookingId: 123,
    recurringEventId: null,
    responses: {},
    location: 'Online',
    description: null,
    status: 'ACCEPTED',
  };

  const baseAttendeeData = {
    name: 'Attendee',
    email: 'attendee@example.com',
    timeZone: 'America/New_York',
    language: { translate, locale: 'en' },
    timeFormat: TimeFormat.TWELVE_HOUR,
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify(baseEventData),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify(baseAttendeeData),
      label: 'Attendee',
    },
  });

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = JSON.parse(state.attendee.value);

  // Create a bound version of translate
  const boundTranslate = React.useCallback((key: string, vars?: Record<string, any>) => {
    return translate(key, vars);
  }, [translate]);

  return (
    <NoShowFeeChargedEmail
      calEvent={{
        ...calEvent,
        attendees: [{ ...attendee, language: { ...attendee.language, translate: boundTranslate } }]
      }}
      attendee={{
        ...attendee,
        language: {
          ...attendee.language,
          translate: boundTranslate
        }
      }}
    />
  );
}