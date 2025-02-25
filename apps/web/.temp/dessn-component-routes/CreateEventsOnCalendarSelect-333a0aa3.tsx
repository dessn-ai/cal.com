import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateEventsOnCalendarSelect } from '../../components/getting-started/components/CreateEventsOnCalendarSelect';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calendar: {
      type: "dropdown",
      value: "default",
      options: ["default", "google", "outlook", "apple"],
      label: "Calendar",
    },
  });

  const calendar = state.calendar.value !== "default" ? {
    externalId: state.calendar.value,
    integration: state.calendar.value,
  } : null;

  return <CreateEventsOnCalendarSelect calendar={calendar} />;
}