import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestEmail } from '../../../../packages/emails/src/templates/OrganizerRequestEmail';

export default function ComponentPreview() {
  const [state] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        uid: 'event-123',
        title: 'Meeting with John',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
        location: 'Online',
        description: 'Project discussion',
        organizer: {
          id: 1,
          name: 'Jane Doe',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            locale: 'en'
          }
        },
        attendees: [
          {
            id: 2,
            name: 'John Smith',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en'
            }
          }
        ],
        type: 'default',
        status: 'ACCEPTED'
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        id: 2,
        name: 'John Smith',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en'
        }
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
      value: false,
      label: 'Attendee Cancelled',
    },
  });

  // Prepare the props with translate functions added after state retrieval
  const emailProps = {
    calEvent: {
      ...state.calEvent.value,
      organizer: {
        ...state.calEvent.value.organizer,
        language: {
          locale: 'en',
          translate: (key: string) => key
        }
      },
      attendees: state.calEvent.value.attendees.map(attendee => ({
        ...attendee,
        language: {
          locale: 'en',
          translate: (key: string) => key
        }
      }))
    },
    attendee: {
      ...state.attendee.value,
      language: {
        locale: 'en',
        translate: (key: string) => key
      }
    },
    newSeat: state.newSeat.value,
    attendeeCancelled: state.attendeeCancelled.value
  };

  try {
    return <OrganizerRequestEmail {...emailProps} />;
  } catch (error) {
    console.error('Error rendering OrganizerRequestEmail:', error);
    return <div>Error rendering email preview</div>;
  }
}