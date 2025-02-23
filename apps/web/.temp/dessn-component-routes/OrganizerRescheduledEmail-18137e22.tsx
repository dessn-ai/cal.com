import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRescheduledEmail } from '../../../../packages/emails/src/templates/OrganizerRescheduledEmail';

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
        uid: 'test-uid',
        responses: {},
        location: 'Virtual',
        description: 'Team sync meeting',
        additionalNotes: '',
        customInputs: {},
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        seatsShowAvailableSeatsCount: false,
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

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  // Simple translation function that matches the expected signature
  const translate = React.useCallback(function t(key: string): string {
    return key;
  }, []);

  // Ensure the function has a name property
  Object.defineProperty(translate, 'name', { value: 't' });

  const enhancedCalEvent = {
    ...parsedCalEvent,
    language: {
      translate,
      locale: state.locale.value,
    },
  };

  const enhancedAttendee = {
    ...parsedAttendee,
    language: {
      translate,
      locale: state.locale.value,
    },
  };

  return (
    <ErrorBoundary>
      <OrganizerRescheduledEmail
        calEvent={enhancedCalEvent}
        attendee={enhancedAttendee}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
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