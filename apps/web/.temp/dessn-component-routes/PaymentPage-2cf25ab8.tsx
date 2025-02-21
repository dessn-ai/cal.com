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

  // Safely parse JSON or return the original value if it's a simple string
  const safeJSONParse = (value: string) => {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };

  return (
    <ImportedComponent
      user={state.user.value}
      eventType={state.eventType.value}
      booking={safeJSONParse(state.booking.value)}
      trpcState={safeJSONParse(state.trpcState.value) as DehydratedState}
      payment={safeJSONParse(state.payment.value)}
      clientSecret={state.clientSecret.value}
      profile={safeJSONParse(state.profile.value)}
    />
  );
}