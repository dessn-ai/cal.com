import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/PaymentPage';

import { DehydratedState } from '@tanstack/react-query';
import { BookingStatus, PaymentOption, BookerLayouts } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "object",
      value: {
        name: "John Doe",
        theme: "light",
        username: "johndoe",
        hideBranding: false,
      },
      label: "User",
    },
    eventType: {
      type: "object",
      value: {
        metadata: {},
        title: "Sample Event",
        users: [{ name: "John Doe", theme: "light", username: "johndoe", hideBranding: false }],
        description: "This is a sample event",
        id: 1,
        length: 60,
        team: null,
        userId: 1,
        eventName: "Sample Event",
        requiresConfirmation: false,
        price: 1000,
        currency: "USD",
        successRedirectUrl: null,
        forwardParamsSuccessRedirect: null,
      },
      label: "Event Type",
    },
    booking: {
      type: "object",
      value: {
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        title: "Sample Booking",
        description: "This is a sample booking",
        id: 1,
        user: { name: "John Doe", timeZone: "UTC" },
        status: BookingStatus.ACCEPTED,
        location: "Online",
        attendees: [{ name: "Jane Doe", email: "jane@example.com", timeZone: "UTC" }],
        uid: "abc123",
        eventTypeId: 1,
        responses: {},
        cancellationReason: null,
        rejectionReason: null,
      },
      label: "Booking",
    },
    trpcState: {
      type: "object",
      value: {} as DehydratedState,
      label: "TRPC State",
    },
    payment: {
      type: "object",
      value: {
        data: {},
        success: false,
        uid: "pay123",
        currency: "USD",
        bookingId: 1,
        appId: "stripe",
        paymentOption: PaymentOption.ON_BOOKING,
        amount: 1000,
        refunded: false,
      },
      label: "Payment",
    },
    clientSecret: {
      type: "string",
      value: "client_secret_123",
      label: "Client Secret",
    },
    profile: {
      type: "object",
      value: {
        name: "John Doe",
        theme: "light",
        hideBranding: false,
      },
      label: "Profile",
    },
  });

  return (
    <ImportedComponent
      user={state.user.value}
      eventType={state.eventType.value}
      booking={state.booking.value}
      trpcState={state.trpcState.value}
      payment={state.payment.value}
      clientSecret={state.clientSecret.value}
      profile={state.profile.value}
    />
  );
}