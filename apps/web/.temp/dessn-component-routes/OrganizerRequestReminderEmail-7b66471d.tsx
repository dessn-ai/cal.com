import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestReminderEmail } from '../../../../packages/emails/src/templates/OrganizerRequestReminderEmail';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
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
        ]
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
    teamMember: {
      type: "string",
      value: JSON.stringify({
        name: "Team Member",
        email: "team@example.com",
        timeZone: "Europe/London",
        language: { locale: "en" }
      }),
      label: "Team Member"
    },
    reassigned: {
      type: "string",
      value: JSON.stringify({
        name: "New Assignee",
        email: "newassignee@example.com",
        reason: "Availability",
        byUser: "Manager"
      }),
      label: "Reassigned"
    }
  });

  // Parse the state values
  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);
  const parsedTeamMember = JSON.parse(state.teamMember.value);
  const parsedReassigned = JSON.parse(state.reassigned.value);

  // Add translate function to language objects after parsing
  const translate = (key: string) => key;
  
  parsedCalEvent.organizer.language.translate = translate;
  if (parsedCalEvent.attendees) {
    parsedCalEvent.attendees.forEach((attendee: any) => {
      if (attendee.language) {
        attendee.language.translate = translate;
      }
    });
  }
  
  if (parsedAttendee.language) {
    parsedAttendee.language.translate = translate;
  }
  
  if (parsedTeamMember.language) {
    parsedTeamMember.language.translate = translate;
  }

  const props = {
    calEvent: parsedCalEvent,
    attendee: parsedAttendee,
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value,
    teamMember: parsedTeamMember,
    reassigned: parsedReassigned
  };

  return <OrganizerRequestReminderEmail {...props} />;
}