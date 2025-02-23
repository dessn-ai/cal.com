import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerAttendeeCancelledSeatEmail } from '../../../../packages/emails/src/templates/OrganizerAttendeeCancelledSeatEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

type TranslateFunction = (key: string) => string;

export default function ComponentPreview() {
  // Define translation function
  const translate: TranslateFunction = React.useCallback((key: string) => key, []);

  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        type: 'default',
        title: 'Meeting',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: {
            locale: 'en',
            translate: 'TRANSLATION_FUNCTION_PLACEHOLDER' as unknown as TranslateFunction,
          },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en',
              translate: 'TRANSLATION_FUNCTION_PLACEHOLDER' as unknown as TranslateFunction,
            },
          },
        ],
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en',
          translate: 'TRANSLATION_FUNCTION_PLACEHOLDER' as unknown as TranslateFunction,
        },
      },
      label: 'Attendee',
    },
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat',
    },
    attendeeCancelled: {
      type: 'boolean',
      value: true,
      label: 'Attendee Cancelled',
    },
    teamMember: {
      type: 'object',
      value: {
        name: 'Team Member',
        email: 'team@example.com',
        timeZone: 'Europe/London',
        language: {
          locale: 'en',
          translate: 'TRANSLATION_FUNCTION_PLACEHOLDER' as unknown as TranslateFunction,
        },
      },
      label: 'Team Member',
    },
    reassigned: {
      type: 'object',
      value: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        reason: 'Schedule conflict',
        byUser: 'Bob Manager',
      },
      label: 'Reassigned',
    },
    timeZone: {
      type: 'string',
      value: 'UTC',
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

  // Create the modified calEvent with the actual translate function
  const modifiedCalEvent = {
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate,
      },
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate,
      },
    })),
  };

  // Create the modified attendee with the actual translate function
  const modifiedAttendee = {
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate,
    },
  };

  // Create the modified teamMember with the actual translate function
  const modifiedTeamMember = {
    ...state.teamMember.value,
    language: {
      ...state.teamMember.value.language,
      translate,
    },
  };

  return (
    <OrganizerAttendeeCancelledSeatEmail
      calEvent={modifiedCalEvent}
      attendee={modifiedAttendee}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={modifiedTeamMember}
      reassigned={state.reassigned.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translate}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}