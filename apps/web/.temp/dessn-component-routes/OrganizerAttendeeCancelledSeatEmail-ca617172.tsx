import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerAttendeeCancelledSeatEmail } from '../../../../packages/emails/src/templates/OrganizerAttendeeCancelledSeatEmail';

import { TimeFormat } from '../../../../packages/types/Calendar';

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
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate: (key: string) => key, locale: 'en' },
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
        language: { translate: (key: string) => key, locale: 'en' },
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

  return (
    <OrganizerAttendeeCancelledSeatEmail
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={state.teamMember.value}
      reassigned={state.reassigned.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={(key: string) => key}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}