import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerReassignedEmail } from '../../../../packages/emails/src/templates/OrganizerReassignedEmail';

export default function ComponentPreview() {
  // Create a translate function that will be used consistently
  const translate = (key: string) => key;

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

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);
  const parsedTeamMember = JSON.parse(state.teamMember.value);
  const parsedReassigned = JSON.parse(state.reassigned.value);

  // Add translate function to the required objects
  parsedCalEvent.organizer.language.translate = translate;
  parsedAttendee.language.translate = translate;
  parsedTeamMember.language.translate = translate;

  return (
    <OrganizerReassignedEmail
      calEvent={{
        ...parsedCalEvent,
        organizer: {
          ...parsedCalEvent.organizer,
          language: {
            ...parsedCalEvent.organizer.language,
            translate,
          },
        },
      }}
      attendee={{
        ...parsedAttendee,
        language: {
          ...parsedAttendee.language,
          translate,
        },
      }}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      teamMember={{
        ...parsedTeamMember,
        language: {
          ...parsedTeamMember.language,
          translate,
        },
      }}
      reassigned={parsedReassigned}
    />
  );
}