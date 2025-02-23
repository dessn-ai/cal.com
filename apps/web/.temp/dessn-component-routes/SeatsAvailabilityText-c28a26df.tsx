import React from 'react';
import { useParentState } from '../useIframeState';
import { SeatsAvailabilityText } from '../../../../packages/features/bookings/components/SeatsAvailabilityText';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showExact: {
      type: "boolean",
      value: true,
      label: "Show Exact",
    },
    variant: {
      type: "dropdown",
      value: "whole",
      options: ["whole", "fraction"],
      label: "Variant",
    },
    bookedSeats: {
      type: "number",
      value: 5,
      label: "Booked Seats",
    },
    totalSeats: {
      type: "number",
      value: 10,
      label: "Total Seats",
    },
  });

  return (
    <SeatsAvailabilityText
      showExact={state.showExact.value}
      variant={state.variant.value as "whole" | "fraction"}
      bookedSeats={state.bookedSeats.value}
      totalSeats={state.totalSeats.value}
    />
  );
}