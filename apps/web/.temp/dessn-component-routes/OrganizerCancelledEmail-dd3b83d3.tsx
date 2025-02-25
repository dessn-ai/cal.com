import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerCancelledEmail } from '../../../../packages/emails/src/templates/OrganizerCancelledEmail';

// Create a simple translation function
const createTranslateFunction = () => (key: string, vars?: Record<string, string>) => {
  return vars ? `${key} ${JSON.stringify(vars)}` : key;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting with John Doe",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: "Jane Smith",
          email: "jane@example.com",
          timeZone: "America/New_York",
          language: {
            locale: "en"
          }
        },
        attendees: [{
          name: "John Doe",
          email: "john@example.com",
          timeZone: "America/Los_Angeles",
          language: {
            locale: "en"
          }
        }],
        schedulingType: "default"
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        timeZone: "America/Los_Angeles",
        language: {
          locale: "en"
        }
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
        language: {
          locale: "en"
        }
      }),
      label: "Team Member"
    },
    reassigned: {
      type: "string",
      value: JSON.stringify({
        name: "New Assignee",
        email: "newassignee@example.com",
        reason: "Availability change",
        byUser: "Manager"
      }),
      label: "Reassigned"
    }
  });

  // Parse the JSON and add the translation function
  const calEvent = JSON.parse(state.calEvent.value);
  calEvent.organizer.language.translate = createTranslateFunction();
  calEvent.attendees.forEach(attendee => {
    attendee.language.translate = createTranslateFunction();
  });

  const attendee = JSON.parse(state.attendee.value);
  attendee.language.translate = createTranslateFunction();

  const teamMember = JSON.parse(state.teamMember.value);
  teamMember.language.translate = createTranslateFunction();

  const props = {
    calEvent,
    attendee,
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value,
    teamMember,
    reassigned: JSON.parse(state.reassigned.value),
  };

  return <OrganizerCancelledEmail {...props} />;
}