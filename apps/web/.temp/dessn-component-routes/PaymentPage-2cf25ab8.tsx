import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/PaymentPage';

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: "John Doe",
      label: "User",
    },
    eventType: {
      type: "string",
      value: "Meeting",
      label: "Event Type",
    },
    booking: {
      type: "string",
      value: JSON.stringify({
        startTime: new Date().toISOString(),
        title: "Sample Booking",
        location: "Online",
      }),
      label: "Booking",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
    payment: {
      type: "string",
      value: JSON.stringify({
        appId: "stripe",
        success: false,
        paymentOption: "HOLD",
      }),
      label: "Payment",
    },
    clientSecret: {
      type: "string",
      value: "sample_client_secret",
      label: "Client Secret",
    },
    profile: {
      type: "string",
      value: JSON.stringify({
        name: "Sample Profile",
        theme: "light",
        hideBranding: false,
      }),
      label: "Profile",
    },
  });

  return (
    <ImportedComponent
      user={JSON.parse(state.user.value)}
      eventType={JSON.parse(state.eventType.value)}
      booking={JSON.parse(state.booking.value)}
      trpcState={JSON.parse(state.trpcState.value) as DehydratedState}
      payment={JSON.parse(state.payment.value)}
      clientSecret={state.clientSecret.value}
      profile={JSON.parse(state.profile.value)}
    />
  );
}