import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerAttendeeCancelledSeatEmail } from '../../../../packages/emails/src/templates/OrganizerAttendeeCancelledSeatEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

type TranslationFunction = {
  (key: string): string;
  (key: string, args: Record<string, unknown>): string;
};

export default function ComponentPreview() {
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
        language: { locale: 'en' },
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { locale: 'en' },
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
        language: { locale: 'en' },
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

  // Define a proper translation function that handles both signatures
  const t: TranslationFunction = (key: string, args?: Record<string, unknown>) => {
    if (args) {
      return Object.entries(args).reduce((acc, [key, value]) => {
        return acc.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
      }, key);
    }
    return key;
  };

  return (
    <OrganizerAttendeeCancelledSeatEmail
      calEvent={{
        ...state.calEvent.value,
        language: {
          translate: t,
          locale: state.locale.value,
        },
      }}
      attendee={{
        ...state.attendee.value,
        language: {
          translate: t,
          locale: state.locale.value,
        },
      }}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={{
        ...state.teamMember.value,
        language: {
          translate: t,
          locale: state.locale.value,
        },
      }}
      reassigned={state.reassigned.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={t}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}