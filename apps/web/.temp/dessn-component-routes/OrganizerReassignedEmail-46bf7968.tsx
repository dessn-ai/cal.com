import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerReassignedEmail } from '../../../../packages/emails/src/templates/OrganizerReassignedEmail';

const translateFn = (key: string) => key;

export default function ComponentPreview() {
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
          language: {
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en',
            },
          },
        ],
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en',
        },
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
    teamMember: {
      type: 'string',
      value: JSON.stringify({
        name: 'Team Member',
        email: 'team@example.com',
        timeZone: 'Europe/London',
        language: {
          locale: 'en',
        },
      }),
      label: 'Team Member',
    },
    reassigned: {
      type: 'string',
      value: JSON.stringify({
        name: 'New Organizer',
        email: 'new@example.com',
        reason: 'Availability change',
        byUser: 'Admin',
      }),
      label: 'Reassigned',
    },
  });

  const calEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: {
        ...JSON.parse(state.calEvent.value).organizer.language,
        translate: translateFn,
      },
    },
  };

  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: {
      ...JSON.parse(state.attendee.value).language,
      translate: translateFn,
    },
  };

  const teamMember = {
    ...JSON.parse(state.teamMember.value),
    language: {
      ...JSON.parse(state.teamMember.value).language,
      translate: translateFn,
    },
  };

  return (
    <OrganizerReassignedEmail
      calEvent={calEvent}
      attendee={attendee}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={teamMember}
      reassigned={JSON.parse(state.reassigned.value)}
    />
  );
}