import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTitle } from '../../../../packages/features/bookings/components/event-meta/Title';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample Event Title",
      label: "Title Text",
    },
    as: {
      type: "dropdown",
      value: "h1",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      label: "Element Type",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <EventTitle
      as={state.as.value as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"}
      className={state.className.value}
    >
      {state.children.value}
    </EventTitle>
  );
}