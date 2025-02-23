import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerAddGuestsEmail } from '../../../../packages/emails/src/templates/OrganizerAddGuestsEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

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
  // Create a stable translation function
  const t = React.useCallback(
    function t(key: string, vars?: Record<string, unknown>) {
      if (!key) return '';
      
      // Handle interpolation
      if (vars && typeof vars === 'object') {
        return Object.entries(vars).reduce((acc, [varKey, value]) => {
          const regex = new RegExp(`{${varKey}}`, 'g');
          return acc.replace(regex, String(value));
        }, key);
      }

      // Return the key as fallback
      return key;
    },
    []
  );

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting',
        startTime: '2023-06-01T10:00:00',
        endTime: '2023-06-01T11:00:00',
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
        description: null,
        location: null,
        uid: '123',
        additionalNotes: null,
        customInputs: {},
        responses: null,
        userFieldsResponses: {},
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
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat',
    },
    attendeeCancelled: {
      type: 'boolean',
      value: false,
      label: 'Attendee Cancelled',
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
      value: true,
      label: 'Is Organizer',
    },
  });

  const calEventData = React.useMemo(() => {
    const parsed = JSON.parse(state.calEvent.value);
    return {
      ...parsed,
      language: {
        translate: t,
        locale: 'en',
      },
    };
  }, [state.calEvent.value, t]);

  const attendeeData = React.useMemo(() => {
    const parsed = JSON.parse(state.attendee.value);
    return {
      ...parsed,
      language: {
        translate: t,
        locale: 'en',
      },
    };
  }, [state.attendee.value, t]);

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OrganizerAddGuestsEmail
          calEvent={calEventData}
          attendee={attendeeData}
          newSeat={state.newSeat.value}
          attendeeCancelled={state.attendeeCancelled.value}
          timeZone={state.timeZone.value}
          includeAppsStatus={state.includeAppsStatus.value}
          t={t}
          locale={state.locale.value}
          timeFormat={state.timeFormat.value as TimeFormat}
          isOrganizer={state.isOrganizer.value}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}