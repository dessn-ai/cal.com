import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerAddGuestsEmail } from '../../../../packages/emails/src/templates/OrganizerAddGuestsEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
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
  // Simple translation function that just returns the key
  function createTranslationFunction() {
    const translationFunction = (key: string, _vars?: Record<string, any>) => {
      return key;
    };

    // Add the i18next expected properties
    Object.assign(translationFunction, {
      i18n: {
        language: 'en',
        exists: () => true,
      },
    });

    return translationFunction;
  }

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
          language: { translate: (key: string) => key, locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: { translate: (key: string) => key, locale: 'en' },
          },
        ],
        additionalNotes: '',
        customInputs: {},
        uid: 'test-uid',
        responses: {},
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate: (key: string) => key, locale: 'en' },
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

  const translationFunction = React.useMemo(createTranslationFunction, []);

  const calEvent = React.useMemo(() => {
    const parsed = JSON.parse(state.calEvent.value);
    return {
      ...parsed,
      language: {
        translate: translationFunction,
        locale: state.locale.value,
      },
    };
  }, [state.calEvent.value, state.locale.value, translationFunction]);

  return (
    <ErrorBoundary>
      <OrganizerAddGuestsEmail
        calEvent={calEvent}
        attendee={JSON.parse(state.attendee.value)}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={translationFunction}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    </ErrorBoundary>
  );
}