import React from 'react';
import { useParentState } from '../useIframeState';
import { VideoMeetingInfo } from '../../modules/videos/views/videos-single-view';

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

  const booking = JSON.parse(state.booking.value);

  return <VideoMeetingInfo booking={booking} />;
}