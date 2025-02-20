import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of VideoMeetingInfo for preview
const PreviewVideoMeetingInfo = ({ booking }) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">{booking.title}</h2>
      <div className="space-y-3">
        <div>
          <strong>Host:</strong> {booking.user.name} ({booking.user.email})
        </div>
        <div>
          <strong>Time Zone:</strong> {booking.user.timeZone}
        </div>
        <div>
          <strong>Start Time:</strong> {new Date(booking.startTime).toLocaleString()}
        </div>
        <div>
          <strong>End Time:</strong> {new Date(booking.endTime).toLocaleString()}
        </div>
        <div>
          <strong>Attendees:</strong>
          <ul className="ml-4">
            {booking.attendees.map((attendee) => (
              <li key={attendee.id}>
                {attendee.name} ({attendee.email})
              </li>
            ))}
          </ul>
        </div>
        {booking.description && (
          <div>
            <strong>Description:</strong>
            <p className="mt-1">{booking.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "string",
      value: JSON.stringify({
        title: "Video Meeting",
        user: {
          timeZone: "America/New_York",
          name: "John Doe",
          email: "john@example.com"
        },
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        attendees: [
          { id: 1, name: "Jane Smith", email: "jane@example.com" }
        ],
        description: "This is a sample video meeting description."
      }),
      label: "Booking Data"
    }
  });

  try {
    const booking = JSON.parse(state.booking.value);
    return <PreviewVideoMeetingInfo booking={booking} />;
  } catch (error) {
    console.error('Error rendering VideoMeetingInfo:', error);
    return <div>Error: Failed to render VideoMeetingInfo component</div>;
  }
}