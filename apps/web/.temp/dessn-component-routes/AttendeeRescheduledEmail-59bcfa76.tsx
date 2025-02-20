import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeRescheduledEmail } from '../../../../packages/emails/src/templates/AttendeeRescheduledEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'meeting',
        title: 'Team Meeting',
        startTime: '2023-06-15T10:00:00Z',
        endTime: '2023-06-15T11:00:00Z',
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: { translate: (key: string) => key, locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'Europe/London',
            language: { translate: (key: string) => key, locale: 'en' },
          },
        ],
        uid: 'unique-calendar-event-id',
        recurringEventId: null,
        destinationCalendar: null,
        cancellationReason: null,
        rejectionReason: null,
        location: 'Online',
        bookingUid: 'booking-uid-123',
        additionalNotes: '',
        customInputs: {},
        responses: {},
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'Europe/London',
        language: { translate: (key: string) => key, locale: 'en' },
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

  // Create a more robust translation function
  const t = React.useCallback((key: string, vars?: Record<string, string | number>) => {
    try {
      if (!key) return '';
      let translated = key;
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          const regex = new RegExp(`{${k}}|{{${k}}}`, 'g');
          translated = translated.replace(regex, String(v));
        });
      }
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  }, []);

  // Ensure t function has necessary properties
  Object.assign(t, {
    language: { locale: state.locale.value },
    locale: state.locale.value,
  });

  return (
    <AttendeeRescheduledEmail
      calEvent={{
        ...parsedCalEvent,
        language: { translate: t, locale: state.locale.value },
      }}
      attendee={{
        ...parsedAttendee,
        language: { translate: t, locale: state.locale.value },
      }}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={t}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}