import React from 'react';
import { useParentState } from '../useIframeState';
import { EventOccurences } from '../../../../packages/features/bookings/components/event-meta/Occurences';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    recurringEvent: {
      type: "dropdown",
      value: "weekly",
      options: ["daily", "weekly", "monthly"],
      label: "Recurring Event Type",
    },
    count: {
      type: "number",
      value: 5,
      label: "Recurring Event Count",
    },
  });

  const event = {
    recurringEvent: {
      freq: state.recurringEvent.value,
      count: state.count.value,
    },
  };

  return <EventOccurences event={event} />;
}