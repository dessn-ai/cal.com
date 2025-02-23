import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeAddGuestsEmail } from '../../../../packages/emails/src/templates/AttendeeAddGuestsEmail';

// Define TimeFormat enum locally instead of importing from Calendar
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  // Create a more robust translation function
  const translationFunction = (key: string, vars?: Record<string, string | number>) => {
    if (typeof key === 'object' && key !== null && 'text' in key) {
      return (key as { text: string }).text;
    }
    if (vars) {
      return Object.entries(vars).reduce((text, [k, v]) => {
        return text.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      }, key as string);
    }
    return key as string;
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'Meeting',
        title: 'Team Sync',
        startTime: '2023-06-15T10:00:00Z',
        endTime: '2023-06-15T11:00:00Z',
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: { translate: translationFunction, locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: { translate: translationFunction, locale: 'en' },
          },
        ],
        uid: 'test-uid',
        responses: {},
        language: { translate: translationFunction, locale: 'en' },
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate: translationFunction, locale: 'en' },
      }),
      label: 'Attendee',
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone',
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
  });

  const parsedCalEvent = {
    ...JSON.parse(state.calEvent.value),
    language: {
      translate: translationFunction,
      locale: state.locale.value,
    },
  };

  const parsedAttendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      translate: translationFunction,
      locale: state.locale.value,
    },
  };

  return (
    <AttendeeAddGuestsEmail
      calEvent={parsedCalEvent}
      attendee={parsedAttendee}
      timeZone={state.timeZone.value}
      t={translationFunction}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      includeAppsStatus={false}
      isOrganizer={false}
    />
  );
}