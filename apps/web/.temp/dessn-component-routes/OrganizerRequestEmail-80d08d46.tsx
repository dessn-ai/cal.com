import React from 'react';
import { useParentState } from '../useIframeState';

// Mock email component that doesn't rely on translation functions
const MockOrganizerRequestEmail = ({ calEvent, attendee, newSeat, attendeeCancelled }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Meeting Request</h2>
      <div style={{ marginBottom: '20px' }}>
        <strong>Event Details:</strong>
        <p>Title: {calEvent.title}</p>
        <p>Start: {new Date(calEvent.startTime).toLocaleString()}</p>
        <p>End: {new Date(calEvent.endTime).toLocaleString()}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <strong>Organizer:</strong>
        <p>Name: {calEvent.organizer.name}</p>
        <p>Email: {calEvent.organizer.email}</p>
        <p>Timezone: {calEvent.organizer.timeZone}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong>Attendee:</strong>
        <p>Name: {attendee.name}</p>
        <p>Email: {attendee.email}</p>
        <p>Timezone: {attendee.timeZone}</p>
      </div>

      {newSeat && (
        <div style={{ marginBottom: '20px', color: 'green' }}>
          New seat requested
        </div>
      )}

      {attendeeCancelled && (
        <div style={{ marginBottom: '20px', color: 'red' }}>
          Attendee cancelled
        </div>
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        uid: 'event-123',
        title: 'Meeting with John',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
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
            name: 'John Smith',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en'
            }
          },
        ],
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
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

  return (
    <MockOrganizerRequestEmail
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
    />
  );
}