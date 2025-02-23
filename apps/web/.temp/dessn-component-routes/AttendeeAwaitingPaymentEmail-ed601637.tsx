import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeAwaitingPaymentEmail } from '../../../../packages/emails/src/templates/AttendeeAwaitingPaymentEmail';

enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h',
}

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
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
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

  // Parse the data and add the translate function
  const calEvent = {
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

  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      ...JSON.parse(state.attendee.value).language,
      translate: t,
    },
  };

  return (
    <AttendeeAwaitingPaymentEmail
      calEvent={calEvent}
      attendee={attendee}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={t}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}