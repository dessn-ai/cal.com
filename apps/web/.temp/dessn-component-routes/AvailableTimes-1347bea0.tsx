import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableTimes } from '../../../../packages/features/bookings/components/AvailableTimes';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slots: {
      type: "string",
      value: JSON.stringify([
        { time: "2023-06-01T09:00:00Z", attendees: 0 },
        { time: "2023-06-01T10:00:00Z", attendees: 1 },
        { time: "2023-06-01T11:00:00Z", attendees: 2 },
      ]),
      label: "Slots",
    },
    showTimeFormatToggle: {
      type: "boolean",
      value: true,
      label: "Show Time Format Toggle",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    seatsPerTimeSlot: {
      type: "number",
      value: 5,
      label: "Seats Per Time Slot",
    },
    onTimeSelect: {
      type: "string",
      value: "() => console.log('Time selected')",
      label: "On Time Select",
    },
    showAvailableSeatsCount: {
      type: "boolean",
      value: true,
      label: "Show Available Seats Count",
    },
  });

  const parsedSlots = JSON.parse(state.slots.value);

  return (
    <AvailableTimes
      slots={parsedSlots}
      showTimeFormatToggle={state.showTimeFormatToggle.value}
      className={state.className.value}
      seatsPerTimeSlot={state.seatsPerTimeSlot.value}
      onTimeSelect={() => eval(state.onTimeSelect.value)}
      showAvailableSeatsCount={state.showAvailableSeatsCount.value}
      event={{ data: { length: 60, bookingFields: [], price: 0, currency: "USD", metadata: {} } }}
    />
  );
}