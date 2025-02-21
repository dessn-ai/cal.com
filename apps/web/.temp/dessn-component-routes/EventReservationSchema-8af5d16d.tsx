import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/schemas/EventReservationSchema';

// Define local types to replace Cal.com dependencies
type ReservationStatus = 'ACCEPTED' | 'REJECTED' | 'CANCELLED' | 'PENDING';

type Attendee = {
  name: string;
  email: string;
};

type Organizer = {
  name: string;
  email: string;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    reservationId: {
      type: "string",
      value: "res-123456",
      label: "Reservation ID",
    },
    eventName: {
      type: "string",
      value: "Team Meeting",
      label: "Event Name",
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
    organizerName: {
      type: "string",
      value: "John Doe",
      label: "Organizer Name",
    },
    organizerEmail: {
      type: "string",
      value: "john@example.com",
      label: "Organizer Email",
    },
    attendeeName: {
      type: "string",
      value: "Jane Smith",
      label: "Attendee Name",
    },
    attendeeEmail: {
      type: "string",
      value: "jane@example.com",
      label: "Attendee Email",
    },
    location: {
      type: "string",
      value: "Conference Room A",
      label: "Location",
    },
    description: {
      type: "string",
      value: "Weekly team sync-up meeting",
      label: "Description",
    },
    status: {
      type: "dropdown",
      value: "ACCEPTED",
      options: ["ACCEPTED", "REJECTED", "CANCELLED", "PENDING"],
      label: "Status",
    },
  });

  const organizer: Organizer = {
    name: state.organizerName.value,
    email: state.organizerEmail.value,
  };

  const attendees: Attendee[] = [
    {
      name: state.attendeeName.value,
      email: state.attendeeEmail.value,
    },
  ];

  return (
    <ImportedComponent
      reservationId={state.reservationId.value}
      eventName={state.eventName.value}
      startTime={new Date(state.startTime.value)}
      endTime={new Date(state.endTime.value)}
      organizer={organizer}
      attendees={attendees}
      location={state.location.value}
      description={state.description.value}
      status={state.status.value as ReservationStatus}
    />
  );
}