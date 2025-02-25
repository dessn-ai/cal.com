import React from 'react';
import { useParentState } from '../useIframeState';

enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24
}

// Simple email preview component
const EmailPreview: React.FC<any> = ({ calEvent, attendee }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2>Meeting Scheduled</h2>
        <div style={{ marginBottom: '20px' }}>
          <strong>Title:</strong> {calEvent.title}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>When:</strong><br />
          {new Date(calEvent.startTime).toLocaleString()} - {new Date(calEvent.endTime).toLocaleString()}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Location:</strong> {calEvent.location}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Organizer:</strong><br />
          {calEvent.organizer.name} ({calEvent.organizer.email})
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Attendee:</strong><br />
          {attendee.name} ({attendee.email})
        </div>
        {calEvent.description && (
          <div style={{ marginBottom: '20px' }}>
            <strong>Description:</strong><br />
            {calEvent.description}
          </div>
        )}
        {calEvent.additionalNotes && (
          <div style={{ marginBottom: '20px' }}>
            <strong>Additional Notes:</strong><br />
            {calEvent.additionalNotes}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const startTime = '2024-01-01T10:00:00Z';
  const endTime = '2024-01-01T11:00:00Z';

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: startTime,
        endTime: endTime,
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: { locale: 'en' },
        },
        attendees: [{
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/Los_Angeles',
          language: { locale: 'en' },
        }],
        uid: 'unique-id-123',
        additionalNotes: 'Some additional notes',
        location: 'Virtual',
        description: 'Test meeting description',
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: { locale: 'en' },
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  try {
    const calEvent = JSON.parse(state.calEvent.value);
    const attendee = JSON.parse(state.attendee.value);

    return (
      <div style={{ margin: 20 }}>
        <EmailPreview
          calEvent={calEvent}
          attendee={attendee}
        />
      </div>
    );
  } catch (error) {
    console.error('Rendering error:', error);
    return (
      <div style={{ color: 'red', padding: 20 }}>
        Error rendering email template: {error.message}
        <pre>{error.stack}</pre>
      </div>
    );
  }
}