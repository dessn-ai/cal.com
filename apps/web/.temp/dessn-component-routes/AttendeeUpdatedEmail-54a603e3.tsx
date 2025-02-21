import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeUpdatedEmail } from '../../../../packages/emails/src/templates/AttendeeUpdatedEmail';

// Use string literals instead of enum
const TIME_FORMAT = {
  TWELVE_HOUR: '12h',
  TWENTY_FOUR_HOUR: '24h',
} as const;

type TimeFormat = typeof TIME_FORMAT[keyof typeof TIME_FORMAT];

export default function ComponentPreview() {
  const translate = (key: string) => key;

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: { locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: { locale: 'en' },
          },
        ],
        team: {
          name: 'Team',
          members: []
        },
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { locale: 'en' },
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
      value: TIME_FORMAT.TWELVE_HOUR,
      options: [TIME_FORMAT.TWELVE_HOUR, TIME_FORMAT.TWENTY_FOUR_HOUR],
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: false,
      label: 'Is Organizer',
    },
  });

  // Parse the JSON and add the translate function after parsing
  const calEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: {
        ...JSON.parse(state.calEvent.value).organizer.language,
        translate,
      },
    },
    attendees: JSON.parse(state.calEvent.value).attendees.map((attendee: any) => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate,
      },
    })),
  };

  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      ...JSON.parse(state.attendee.value).language,
      translate,
    },
  };

  return (
    <AttendeeUpdatedEmail
      calEvent={calEvent}
      attendee={attendee}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translate}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}