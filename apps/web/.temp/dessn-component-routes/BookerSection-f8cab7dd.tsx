import React from 'react';
import { useParentState } from '../useIframeState';
import { BookerSection } from '../../../../packages/features/bookings/Booker/components/Section';
import { useBookerStore, useInitializeBookerStore } from '../../../../packages/features/bookings/Booker/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    area: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "main", "meta", "timeslots", "header"],
      label: "Grid Area",
    },
    visible: {
      type: "boolean",
      value: true,
      label: "Visible",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Custom Class",
    },
  });

  // Initialize the store with required values
  useInitializeBookerStore({
    username: "demo",
    eventSlug: "demo-event",
    eventId: 1,
    layout: "month_view"
  });

  return (
    <BookerSection
      area={state.area.value}
      visible={state.visible.value}
      className={state.className.value}
    >
      <div>Sample Content</div>
    </BookerSection>
  );
}