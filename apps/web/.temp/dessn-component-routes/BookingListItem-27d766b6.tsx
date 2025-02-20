import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingListItem } from '../../components/booking/BookingListItem';
import { BookingStatus } from '@calcom/prisma/enums';

// Mock InsightsProvider context
const InsightsContext = React.createContext({});
const MockInsightsProvider = ({ children }) => {
  return <InsightsContext.Provider value={{}}>{children}</InsightsContext.Provider>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    listingStatus: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "past", "cancelled", "unconfirmed", "recurring"],
      label: "Listing Status",
    },
    status: {
      type: "dropdown",
      value: "ACCEPTED",
      options: ["ACCEPTED", "PENDING", "CANCELLED", "REJECTED"],
      label: "Booking Status",
    },
    startTime: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Time",
    },
    endTime: {
      type: "string",
      value: new Date(Date.now() + 3600000).toISOString(),
      label: "End Time",
    },
    title: {
      type: "string",
      value: "Sample Booking",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sample booking description",
      label: "Description",
    },
    isRecurring: {
      type: "boolean",
      value: false,
      label: "Is Recurring",
    },
    paid: {
      type: "boolean",
      value: false,
      label: "Is Paid",
    },
  });

  const mockBooking = {
    id: 1,
    uid: 'mock-uid',
    title: state.title.value,
    description: state.description.value,
    startTime: new Date(state.startTime.value),
    endTime: new Date(state.endTime.value),
    status: state.status.value as BookingStatus,
    listingStatus: state.listingStatus.value as any,
    recurringEventId: state.isRecurring.value ? 'mock-recurring-id' : null,
    paid: state.paid.value,
    attendees: [
      { id: 1, name: 'John Doe', email: 'john@example.com', timeZone: 'America/New_York' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', timeZone: 'Europe/London' },
    ],
    user: { id: 1, name: 'Host User', email: 'host@example.com' },
    eventType: {
      id: 1,
      title: 'Sample Event Type',
      slug: 'sample-event',
      team: null,
      recurringEvent: null,
      price: 100,
      currency: 'USD',
      metadata: null,
      seatsPerTimeSlot: null,
      users: [],
      hosts: [],
      owner: { id: 1, name: 'Host User', email: 'host@example.com' },
    },
    location: 'Zoom',
    isRecurring: state.isRecurring.value,
    recurringInfo: state.isRecurring.value ? {
      count: 5,
      bookings: {
        [BookingStatus.ACCEPTED]: [new Date(), new Date(Date.now() + 86400000)],
        [BookingStatus.CANCELLED]: [],
        [BookingStatus.PENDING]: [],
      },
    } : undefined,
    payment: state.paid.value ? [{
      id: 1,
      success: true,
      amount: 100,
      currency: 'USD',
      data: {
        id: 'mock_payment_id',
        object: 'payment_intent',
        status: 'succeeded'
      },
      externalId: 'mock_external_id',
      paymentOption: 'ON_BOOKING',
      fee: 0,
      refunded: false,
      paymentFee: 0
    }] : [],
    seatsReferences: [],
    rescheduled: false,
    isToday: false,
    metadata: null,
    responses: {},
    references: [],
    cancellation: null,
    isCancelled: false,
    rejectionReason: null,
    seatsShowAttendees: true,
    seatsShowAvailabilityCount: true,
    attendeeSeatId: null,
    bookingSeat: null,
    dynamicEventSlugRef: '',
    dynamicGroupSlugRef: '',
    destinationCalendar: null,
    hasHashedBookingLink: false,
    smsReminderNumber: null,
    customInputs: {},
    requiresConfirmation: false,
    location_type: 'integrations:zoom',
    videoCallData: null,
    appsStatus: [],
    workflows: [],
    userPrimaryEmail: 'host@example.com',
    assignmentReason: [], // Add this to prevent the length error
  };

  const mockLoggedInUser = {
    userId: 1,
    userTimeZone: 'America/New_York',
    userTimeFormat: 12,
    userEmail: 'host@example.com',
  };

  try {
    return (
      <MockInsightsProvider>
        <BookingListItem
          {...mockBooking}
          loggedInUser={mockLoggedInUser}
        />
      </MockInsightsProvider>
    );
  } catch (error) {
    console.error('Error rendering BookingListItem:', error);
    return <div>Error rendering booking item</div>;
  }
}