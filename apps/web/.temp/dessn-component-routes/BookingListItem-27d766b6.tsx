import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/booking/BookingListItem';

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
        paymentInfo: {
          amount: 100,
          currency: "USD",
          paymentOption: "ON_BOOKING",
          success: true
        },
        payment: [{
          id: 1,
          success: true,
          paymentOption: "ON_BOOKING",
          amount: 100,
          currency: "USD",
          data: {},
          externalId: "pay_123",
          fee: 0,
          refunded: false,
          appId: "stripe"
        }],
        location: "https://meet.google.com/abc-defg-hij",
        eventType: {
          id: 1,
          title: "Sample Event Type",
          slug: "sample-event",
          length: 60,
          price: 100,
          currency: "USD",
          recurringEvent: { freq: "WEEKLY" },
          team: { id: 1, name: "Sample Team" },
          workflows: [{ id: 1 }],
          hosts: [{ id: 1 }],
          bookingFields: [],
          customInputs: [],
          locations: [{ type: "integrations:daily" }],
          schedule: { id: 1 },
          seatsPerTimeSlot: null,
          users: [{ id: 1, name: "Host User", email: "host@example.com" }]
        },
        metadata: {
          type: "payment_app",
          appId: "stripe",
          paymentOption: "ON_BOOKING"
        },
        isRecorded: false,
        recurringEventId: null,
        seatsReferences: [],
        rescheduled: false,
        isToday: true,
        responses: {},
        cancellationReason: null,
        rejectionReason: null,
        isCancelled: false,
        references: [{ type: "payment", credentialId: 1 }],
        workflows: [{ id: 1 }],
        smsReminderNumber: null,
        customInputs: {},
        userPrimaryEmail: "host@example.com",
        location_type: "integrations:daily",
        destinationCalendar: null,
        hideDate: false,
        recurringCount: 0,
        bookingFields: [],
        hasHashedBookingLink: false,
        appsStatus: []
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
        userEmail: "user@example.com",
        username: "testuser",
        name: "Test User",
        weekStart: "Monday",
        defaultScheduleId: 1
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
    <div className="p-4">
      <ImportedComponent
        {...state.booking.value}
        listingStatus={state.listingStatus.value}
        recurringInfo={state.recurringInfo.value}
        loggedInUser={state.loggedInUser.value}
        isToday={state.isToday.value}
      />
    </div>
  );
}