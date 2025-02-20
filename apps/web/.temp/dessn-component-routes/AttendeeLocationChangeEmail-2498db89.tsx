import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeLocationChangeEmail } from '../../../../packages/emails/src/templates/AttendeeLocationChangeEmail';

// Define TimeFormat enum locally instead of importing
const TimeFormat = {
  TWELVE_HOUR: '12h',
  TWENTY_FOUR_HOUR: '24h',
} as const;

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
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
        location: 'New Location',
        uid: 'test-uid',
        additionalNotes: 'Additional notes',
        appsStatus: [],
        bookingId: 123,
        cancellationReason: '',
        responses: {},
        userFieldsResponses: {},
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        seatsShowAvailableSeatsCount: false,
        recurringEventId: null,
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

  // Memoize the translation function to keep it stable across renders
  const translate = React.useMemo(() => {
    return (key: string | { id: string; defaultMessage: string }, vars?: Record<string, string>) => {
      try {
        // Handle object format
        if (typeof key === 'object' && key.id) {
          key = key.defaultMessage || key.id;
        }

        // Handle string format
        if (typeof key !== 'string') {
          return String(key);
        }

        if (!vars) {
          return key;
        }

        // Handle variable replacement
        return Object.entries(vars).reduce((text, [k, v]) => {
          return text.replace(new RegExp(`{${k}}|%{${k}}`, 'g'), String(v));
        }, key);
      } catch (error) {
        console.error('Translation error:', error);
        return typeof key === 'string' ? key : String(key);
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <AttendeeLocationChangeEmail
        calEvent={parsedCalEvent}
        attendee={parsedAttendee}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={translate}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as typeof TimeFormat[keyof typeof TimeFormat]}
        isOrganizer={state.isOrganizer.value}
      />
    </ErrorBoundary>
  );
}