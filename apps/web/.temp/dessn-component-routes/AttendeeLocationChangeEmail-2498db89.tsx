import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeLocationChangeEmail } from '../../../../packages/emails/src/templates/AttendeeLocationChangeEmail';

// Mock TimeFormat enum locally instead of importing from Calendar package
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  // Create a stable translation function
  const translateFn = function(this: any, key: string, vars?: Record<string, any>) {
    if (!key) return '';
    let text = key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{${k}}`, 'g'), String(v));
      });
    }
    return text;
  };

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
          language: {
            translate: translateFn,
            locale: 'en'
          },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'Europe/London',
            language: {
              translate: translateFn,
              locale: 'en'
            },
          },
        ],
        location: 'New Location',
        uid: 'test-uid',
        team: {
          name: 'Team',
          members: []
        },
        recurringEvent: null,
        cancellationReason: undefined,
        additionalNotes: undefined,
        customInputs: {},
        responses: {},
        seatsPerTimeSlot: undefined,
        seatsShowAttendees: false,
        // Add properties needed for manage links
        destinationCalendar: null,
        hideCalendarNotes: false,
        requiresConfirmation: false,
        metadata: {},
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'Europe/London',
        language: {
          translate: translateFn,
          locale: 'en'
        },
        // Ensure the translate function is directly accessible
        translate: translateFn,
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

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  return (
    <AttendeeLocationChangeEmail
      calEvent={parsedCalEvent}
      attendee={{
        ...parsedAttendee,
        language: {
          ...parsedAttendee.language,
          translate: translateFn
        },
        translate: translateFn
      }}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translateFn}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}