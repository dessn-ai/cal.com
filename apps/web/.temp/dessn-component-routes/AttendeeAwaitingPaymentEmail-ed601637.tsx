import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeAwaitingPaymentEmail } from '../../../../packages/emails/src/templates/AttendeeAwaitingPaymentEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  const t = (key: string) => key;

  // Create the base objects with translate function
  const baseLanguage = {
    locale: 'en',
    translate: t,
  };

  const baseAttendee = {
    name: 'John Doe',
    email: 'john@example.com',
    timeZone: 'America/Los_Angeles',
    language: baseLanguage,
  };

  const baseCalEvent = {
    type: 'default',
    title: 'Meeting with John Doe',
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    organizer: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      timeZone: 'America/New_York',
      language: baseLanguage,
    },
    attendees: [baseAttendee],
    paymentInfo: {
      link: 'https://example.com/payment',
      paymentOption: 'HOLD',
    },
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify(baseCalEvent),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify(baseAttendee),
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

  // Create the props objects with the translate function
  const attendeeWithTranslate = {
    ...JSON.parse(state.attendee.value),
    language: {
      ...JSON.parse(state.attendee.value).language,
      translate: t,
    },
  };

  const calEventWithTranslate = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: {
        ...JSON.parse(state.calEvent.value).organizer.language,
        translate: t,
      },
    },
    attendees: JSON.parse(state.calEvent.value).attendees.map((attendee: any) => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate: t,
      },
    })),
  };

  try {
    return (
      <AttendeeAwaitingPaymentEmail
        calEvent={calEventWithTranslate}
        attendee={attendeeWithTranslate}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={t}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    );
  } catch (error) {
    console.error('Error rendering email:', error);
    return <div>Error rendering email template</div>;
  }
}