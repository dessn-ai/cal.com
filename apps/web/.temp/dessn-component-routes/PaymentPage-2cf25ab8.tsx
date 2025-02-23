import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/PaymentPage';
import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        email: "john@example.com"
      }),
      label: "User",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Meeting",
        length: 30
      }),
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

  const parseJsonSafely = (jsonString: string, fallback: any = {}) => {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      return fallback;
    }
  };

  return (
    <ImportedComponent
      user={parseJsonSafely(state.user.value)}
      eventType={parseJsonSafely(state.eventType.value)}
      booking={parseJsonSafely(state.booking.value)}
      trpcState={parseJsonSafely(state.trpcState.value) as DehydratedState}
      payment={parseJsonSafely(state.payment.value)}
      clientSecret={state.clientSecret.value}
      profile={parseJsonSafely(state.profile.value)}
    />
  );
}