import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-meeting-not-started-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "string",
      value: JSON.stringify({
        title: "Sample Meeting",
        startTime: new Date().toISOString(),
      }),
      label: "Booking",
    },
  });

  const booking = JSON.parse(state.booking.value);

  return <ImportedComponent booking={booking} />;
}