import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/booking/BookingListItem';

import { BookingStatus } from '@calcom/prisma/enums';

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
    payment: state.paid.value ? [{ success: true, amount: 100, currency: 'USD' }] : [],
    seatsReferences: [],
    rescheduled: false,
    isToday: false,
    metadata: null,
  };

  const mockLoggedInUser = {
    userId: 1,
    userTimeZone: 'America/New_York',
    userTimeFormat: 12,
    userEmail: 'host@example.com',
  };

  return (
    <ImportedComponent
      {...mockBooking}
      loggedInUser={mockLoggedInUser}
    />
  );
}