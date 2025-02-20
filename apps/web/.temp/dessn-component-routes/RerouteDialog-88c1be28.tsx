import React from 'react';
import { useParentState } from '../useIframeState';
import { RerouteDialog } from '../../components/dialog/RerouteDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: false,
      label: "Is Dialog Open",
    },
    bookingId: {
      type: "string",
      value: "booking123",
      label: "Booking ID",
    },
    bookingTitle: {
      type: "string",
      value: "Sample Booking",
      label: "Booking Title",
    },
    bookingStatus: {
      type: "string",
      value: "confirmed",
      label: "Booking Status",
    },
    startTime: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Time",
    },
  });

  const mockBooking = {
    id: state.bookingId.value,
    uid: state.bookingId.value,
    title: state.bookingTitle.value,
    status: state.bookingStatus.value,
    startTime: state.startTime.value,
    metadata: {},
    responses: {},
    routedFromRoutingFormReponse: { id: 1 },
    attendees: [{ locale: 'en', timeZone: 'UTC', email: 'attendee@example.com', name: 'Attendee' }],
    eventType: {
      length: 30,
      schedulingType: 'ROUND_ROBIN',
      title: 'Team Meeting',
      id: 1,
      slug: 'team-meeting',
      team: { slug: 'team-slug' },
    },
    user: { id: 1, name: 'John Doe', email: 'john@example.com' },
  };

  return (
    <RerouteDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(isOpen) => setState('isOpenDialog', isOpen)}
      booking={mockBooking}
    />
  );
}