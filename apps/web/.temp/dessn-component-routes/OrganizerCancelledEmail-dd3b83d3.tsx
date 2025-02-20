import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerCancelledEmail } from '../../../../packages/emails/src/templates/OrganizerCancelledEmail';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "object",
      value: {
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
          },
          timeFormat: 12
        },
        attendees: [{
          name: "John Doe",
          email: "john@example.com",
          timeZone: "America/Los_Angeles",
          language: {
            locale: "en"
          }
        }],
        schedulingType: null,
        recurringEvent: null,
        uid: "test-uid",
        location: "Zoom",
        destinationCalendar: null,
        cancellationReason: "Schedule changed"
      },
      label: "Calendar Event"
    },
    attendee: {
      type: "object",
      value: {
        name: "John Doe",
        email: "john@example.com",
        timeZone: "America/Los_Angeles",
        language: {
          locale: "en"
        }
      },
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
      type: "object",
      value: {
        name: "Team Member",
        email: "team@example.com",
        timeZone: "Europe/London",
        language: {
          locale: "en"
        },
        timeFormat: 12
      },
      label: "Team Member"
    },
    reassigned: {
      type: "object",
      value: {
        name: "New Assignee",
        email: "newassignee@example.com",
        reason: "Availability change",
        byUser: "Manager"
      },
      label: "Reassigned"
    }
  });

  const mockTranslate = React.useCallback((key: string) => key, []);

  const enhancedCalEvent = React.useMemo(() => ({
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate: mockTranslate
      }
    }
  }), [state.calEvent.value, mockTranslate]);

  const enhancedAttendee = React.useMemo(() => ({
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate: mockTranslate
    }
  }), [state.attendee.value, mockTranslate]);

  const enhancedTeamMember = React.useMemo(() => 
    state.teamMember.value ? {
      ...state.teamMember.value,
      language: {
        ...state.teamMember.value.language,
        translate: mockTranslate
      }
    } : undefined
  , [state.teamMember.value, mockTranslate]);

  const props = {
    calEvent: enhancedCalEvent,
    attendee: enhancedAttendee,
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value,
    teamMember: enhancedTeamMember,
    reassigned: state.reassigned.value
  };

  return <OrganizerCancelledEmail {...props} />;
}