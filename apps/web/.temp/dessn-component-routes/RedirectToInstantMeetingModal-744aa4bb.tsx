import React from 'react';
import { useParentState } from '../useIframeState';
import { RedirectToInstantMeetingModal } from '../../../../packages/features/bookings/Booker/components/RedirectToInstantMeetingModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bookingId: {
      type: "number",
      value: 1234,
      label: "Booking ID",
    },
    expiryTime: {
      type: "string",
      value: new Date(Date.now() + 5 * 60000).toISOString(), // 5 minutes from now
      label: "Expiry Time",
    },
    instantVideoMeetingUrl: {
      type: "string",
      value: "https://meet.example.com/123456",
      label: "Instant Video Meeting URL",
    },
    orgName: {
      type: "string",
      value: "Example Organization",
      label: "Organization Name",
    },
  });

  const onGoBack = () => {
    console.log("Go back clicked");
  };

  return (
    <RedirectToInstantMeetingModal
      bookingId={state.bookingId.value}
      onGoBack={onGoBack}
      expiryTime={new Date(state.expiryTime.value)}
      instantVideoMeetingUrl={state.instantVideoMeetingUrl.value}
      orgName={state.orgName.value}
    />
  );
}