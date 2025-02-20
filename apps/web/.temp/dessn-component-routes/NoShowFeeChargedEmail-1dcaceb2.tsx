import React from 'react';
import { useParentState } from '../useIframeState';
import { NoShowFeeChargedEmail } from '../../../../packages/emails/src/templates/NoShowFeeChargedEmail';

// Mock TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24
}

export default function ComponentPreview() {
  // Create translation function
  const translate = (key: string, vars?: Record<string, any>) => {
    const translations: Record<string, string> = {
      "no_show_fee_charged_text_body": "No-show fee charged",
      "no_show_fee_charged_subtitle": `A no-show fee of ${vars?.amount || 10} ${vars?.formatParams?.amount?.currency || 'USD'} has been charged`,
    };
    return translations[key] || key;
  };

  const [state, setState] = useParentState({
    calEventString: {
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
        },
        attendees: [],
        paymentInfo: {
          amount: 1000,
          currency: 'USD',
        },
        uid: 'unique-id',
      }),
      label: 'Calendar Event',
    },
    attendeeString: {
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

  // Parse the serialized data and add the non-serializable properties
  const calEvent = {
    ...JSON.parse(state.calEventString.value),
    organizer: {
      ...JSON.parse(state.calEventString.value).organizer,
      language: {
        translate,
        locale: 'en'
      },
    },
  };

  const attendee = {
    ...JSON.parse(state.attendeeString.value),
    language: {
      translate,
      locale: 'en'
    },
  };

  return (
    <NoShowFeeChargedEmail
      calEvent={calEvent}
      attendee={attendee}
    />
  );
}