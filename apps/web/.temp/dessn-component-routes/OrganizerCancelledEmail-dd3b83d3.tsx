import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the BaseScheduledEmail component to avoid translation issues
const BaseScheduledEmail = ({ subject, title, children }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subject}</h2>
    {children}
  </div>
);

// Mock the actual email component with the base component
const MockOrganizerCancelledEmail = (props) => {
  const t = (key) => key;
  
  return (
    <BaseScheduledEmail
      subject={t("event_cancelled_subject")}
      title={t("event_request_cancelled")}
      headerType="xCircle"
      {...props}
    />
  );
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
          timeFormat: 12,
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
        schedulingType: "default",
        recurringEvent: null
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
        timeFormat: 24,
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

  const props = {
    calEvent: JSON.parse(state.calEvent.value),
    attendee: JSON.parse(state.attendee.value),
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value,
    teamMember: JSON.parse(state.teamMember.value),
    reassigned: JSON.parse(state.reassigned.value),
    t: (key) => key,
    locale: "en",
    timeZone: "UTC"
  };

  return <MockOrganizerCancelledEmail {...props} />;
}