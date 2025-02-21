import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeRescheduledEmail } from '../../../../packages/emails/src/templates/AttendeeRescheduledEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

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
        uid: '123456',
        recurringEventId: null,
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

  // Create a translation function that matches the expected signature
  const translate = React.useMemo(() => {
    function t(key: string): string;
    function t(key: string, params: Record<string, unknown>): string;
    function t(key: string, params?: Record<string, unknown>): string {
      try {
        if (!params) return key;
        let result = key;
        Object.entries(params).forEach(([k, v]) => {
          const value = String(v ?? '');
          result = result.replace(new RegExp(`{${k}}|{{${k}}}`, 'g'), value);
        });
        return result;
      } catch (error) {
        return key;
      }
    }
    
    // Add necessary properties to match expected interface
    Object.assign(t, {
      exists: (key: string) => true,
      locale: 'en',
      language: 'en',
    });
    
    return t;
  }, []);

  return (
    <ErrorBoundary>
      <AttendeeRescheduledEmail
        calEvent={parsedCalEvent}
        attendee={parsedAttendee}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={translate}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    </ErrorBoundary>
  );
}