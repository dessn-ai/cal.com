import React from 'react';
import { useParentState } from '../useIframeState';
import { EventDuration } from '../../../../packages/features/bookings/components/event-meta/Duration';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    length: {
      type: "number",
      value: 60,
      label: "Event Length (minutes)",
    },
    isDynamic: {
      type: "boolean",
      value: false,
      label: "Is Dynamic Event",
    },
    multipleDuration: {
      type: "string",
      value: "[30, 60, 90]",
      label: "Multiple Durations",
    },
  });

  const event = {
    length: state.length.value,
    isDynamic: state.isDynamic.value,
    metadata: {
      multipleDuration: JSON.parse(state.multipleDuration.value),
    },
  };

  return <EventDuration event={event} />;
}