import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerLocationChangeEmail } from '../../../../packages/emails/src/templates/OrganizerLocationChangeEmail';

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
  const translationFunction = React.useCallback((key: string, vars?: Record<string, string | number>) => {
    try {
      if (!key) return '';
      if (!vars) return key;
      
      let text = key;
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{${k}}`, 'g'), String(v));
      });
      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  }, []);

  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting",
        startTime: "2023-06-15T10:00:00",
        endTime: "2023-06-15T11:00:00",
        organizer: {
          name: "John Doe",
          email: "john@example.com",
          timeZone: "America/New_York",
          language: { locale: "en" }
        },
        attendees: [
          {
            name: "Jane Smith",
            email: "jane@example.com",
            timeZone: "America/Los_Angeles",
            language: { locale: "en" }
          }
        ],
        location: "New Location",
        t: translationFunction
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "Jane Smith",
        email: "jane@example.com",
        timeZone: "America/Los_Angeles",
        language: { locale: "en" }
      }),
      label: "Attendee"
    },
    newSeat: {
      type: "boolean",
      value: false,
      label: "New Seat"
    },
    attendeeCancelled: {
      type: "boolean",
      value: false,
      label: "Attendee Cancelled"
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone"
    },
    includeAppsStatus: {
      type: "boolean",
      value: false,
      label: "Include Apps Status"
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale"
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: "Time Format"
    },
    isOrganizer: {
      type: "boolean",
      value: true,
      label: "Is Organizer"
    }
  });

  const calEventData = React.useMemo(() => {
    const parsedEvent = JSON.parse(state.calEvent.value);
    return {
      ...parsedEvent,
      t: translationFunction
    };
  }, [state.calEvent.value, translationFunction]);

  return (
    <ErrorBoundary>
      <OrganizerLocationChangeEmail
        calEvent={calEventData}
        attendee={JSON.parse(state.attendee.value)}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
        t={translationFunction}
      />
    </ErrorBoundary>
  );
}