import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerReassignedEmail } from '../../../../packages/emails/src/templates/OrganizerReassignedEmail';


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
            translate: (key: string) => key,
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate: (key: string) => key,
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
          translate: (key: string) => key,
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
          translate: (key: string) => key,
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

  return (
    <OrganizerReassignedEmail
      calEvent={JSON.parse(state.calEvent.value)}
      attendee={JSON.parse(state.attendee.value)}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={JSON.parse(state.teamMember.value)}
      reassigned={JSON.parse(state.reassigned.value)}
    />
  );
}