import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRescheduledEmail } from '../../../../packages/emails/src/templates/OrganizerRescheduledEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  // Create translation function
  const translate = React.useCallback((key: string, values?: Record<string, unknown>): string => {
    if (!values) return key;
    return Object.entries(values).reduce((acc, [k, v]) => {
      return acc.replace(new RegExp(`{${k}}`, 'g'), String(v));
    }, key);
  }, []);

  const calEventData = {
    type: 'Meeting',
    title: 'Team Sync',
    startTime: '2023-06-15T10:00:00Z',
    endTime: '2023-06-15T11:00:00Z',
    organizer: {
      name: 'John Doe',
      email: 'john@example.com',
      timeZone: 'America/New_York',
      language: {
        translate,
        locale: 'en'
      },
      timeFormat: TimeFormat.TWELVE_HOUR,
    },
    attendees: [
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate,
          locale: 'en'
        },
      },
    ],
  };

  const attendeeData = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    timeZone: 'America/Los_Angeles',
    language: {
      translate,
      locale: 'en'
    },
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify(calEventData),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify(attendeeData),
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

  // Parse the event data and reattach the translation function
  const parsedCalEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: {
        translate,
        locale: 'en'
      }
    }
  };

  // Parse the attendee data and reattach the translation function
  const parsedAttendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      translate,
      locale: 'en'
    }
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <OrganizerRescheduledEmail
        calEvent={parsedCalEvent}
        attendee={parsedAttendee}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={translate}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    </div>
  );
}