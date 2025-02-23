import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/booking/BookingListItem';

// Mock the getPaymentAppData function directly in the module scope
global.getPaymentAppData = () => ({
  id: "pay_123",
  price: "100",
  currency: "USD",
  success: true,
  paymentOption: "HOLD",
  type: "stripe",
  appId: "stripe-payment-app",
  paymentFee: "0",
  meta: {
    stripe: {
      paymentIntentId: "pi_123",
      publishableKey: "pk_test_123"
    }
  }
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "object",
      value: {
        id: 1,
        uid: "abc123",
        title: "Sample Booking",
        description: "This is a sample booking description",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        attendees: [
          { id: 1, name: "John Doe", email: "john@example.com", timeZone: "America/New_York" }
        ],
        user: { id: 1, name: "Host User", email: "host@example.com" },
        status: "ACCEPTED",
        paid: true,
        payment: [{
          success: true,
          paymentOption: "HOLD",
          amount: "100",
          currency: "USD",
          data: {
            id: "pay_123",
            type: "stripe",
            success: true,
            amount: "100",
            currency: "USD",
            paymentOption: "HOLD"
          },
          appId: "stripe-payment-app"
        }],
        location: "https://meet.google.com/abc-defg-hij",
        eventType: {
          id: 1,
          title: "Sample Event Type",
          slug: "sample-event",
          length: 60,
          price: "100",
          currency: "USD",
          recurringEvent: { freq: "WEEKLY" },
          team: { id: 1, name: "Sample Team" }
        },
        metadata: {
          apps: "stripe",
          paymentId: "pay_123",
          paymentIntentId: "pi_123",
          amount: "100",
          currency: "USD",
          credentialId: "1",
          price: "100"
        },
        isRecorded: false,
        recurringEventId: null,
        seatsReferences: [],
        rescheduled: false,
        isToday: true
      },
      label: "Booking",
    },
    listingStatus: {
      type: "string",
      value: "upcoming",
      label: "Listing Status",
    },
    recurringInfo: {
      type: "object",
      value: {
        count: 5,
        bookings: {
          ACCEPTED: [new Date(), new Date(Date.now() + 86400000)],
          CANCELLED: [],
          PENDING: []
        }
      },
      label: "Recurring Info",
    },
    loggedInUser: {
      type: "object",
      value: {
        userId: 1,
        userTimeZone: "America/New_York",
        userTimeFormat: 12,
        userEmail: "user@example.com"
      },
      label: "Logged In User",
    },
    isToday: {
      type: "boolean",
      value: true,
      label: "Is Today",
    }
  });

  return (
    <ImportedComponent
      {...state.booking.value}
      listingStatus={state.listingStatus.value}
      recurringInfo={state.recurringInfo.value}
      loggedInUser={state.loggedInUser.value}
      isToday={state.isToday.value}
    />
  );
}