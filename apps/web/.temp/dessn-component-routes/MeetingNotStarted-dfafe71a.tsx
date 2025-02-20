import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-meeting-not-started-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "object",
      value: {
        title: "Team Meeting",
        description: "Weekly team sync",
        metadata: {},
        id: 1234,
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        attendees: [
          {
            name: "John Doe",
            id: 1,
            email: "john@example.com",
            locale: "en",
            timeZone: "America/New_York",
            bookingId: 1234,
            noShow: null,
            phoneNumber: "+1234567890"
          }
        ],
        userPrimaryEmail: "organizer@example.com",
        customInputs: {}
      },
      label: "Booking"
    }
  });

  return (
    <ImportedComponent
      booking={{
        ...state.booking.value,
        startTime: new Date(state.booking.value.startTime),
        endTime: new Date(state.booking.value.endTime)
      }}
    />
  );
}