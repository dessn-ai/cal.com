import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestReminderEmail } from '../../../../packages/emails/src/templates/OrganizerRequestReminderEmail';

const createLanguageObject = () => ({
  translate: function translate(key: string) { return key; },
  locale: "en"
});

export default function ComponentPreview() {
  const languageObject = createLanguageObject();

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
          timeZone: "America/New_York"
        },
        attendees: [
          {
            name: "Jane Smith",
            email: "jane@example.com",
            timeZone: "America/Los_Angeles"
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
        timeZone: "America/Los_Angeles"
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
        timeZone: "Europe/London"
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

  // Add language objects
  parsedCalEvent.organizer.language = languageObject;
  parsedCalEvent.attendees = parsedCalEvent.attendees.map(attendee => ({
    ...attendee,
    language: languageObject
  }));
  
  parsedAttendee.language = languageObject;
  parsedTeamMember.language = languageObject;

  try {
    const props = {
      calEvent: {
        ...parsedCalEvent,
        organizer: {
          ...parsedCalEvent.organizer,
          language: languageObject
        }
      },
      attendee: {
        ...parsedAttendee,
        language: languageObject
      },
      newSeat: state.newSeat.value,
      attendeeCancelled: state.attendeeCancelled.value,
      teamMember: {
        ...parsedTeamMember,
        language: languageObject
      },
      reassigned: parsedReassigned
    };

    return <OrganizerRequestReminderEmail {...props} />;
  } catch (error) {
    console.error('Error rendering email template:', error);
    return <div>Error rendering email template</div>;
  }
}