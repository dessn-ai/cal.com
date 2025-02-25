import React from 'react';
import { useParentState } from '../useIframeState';
import { BookerSection } from '../../../../packages/features/bookings/Booker/components/Section';
import { create } from 'zustand';

// Create a mock store with the minimal required state
const mockStore = create(() => ({
  layout: 'month_view',
  selectedDate: null,
  state: {
    loading: false,
  },
}));

// Override the useBookerStore import in the Section component
// by adding it to the window object
window.useBookerStore = mockStore;

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

  return (
    <div>
      <BookerSection
        area={state.area.value}
        visible={state.visible.value}
        className={state.className.value}
      >
        <div>Sample Content</div>
      </BookerSection>
    </div>
  );
}

// Add type declaration for the window object
declare global {
  interface Window {
    useBookerStore: typeof mockStore;
  }
}