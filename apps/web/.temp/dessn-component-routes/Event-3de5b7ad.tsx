import React from 'react';
import { useParentState } from '../useIframeState';
import { Event } from '../../../../packages/features/calendars/weeklyview/components/event/Event';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventId: {
      type: "number",
      value: 1,
      label: "Event ID",
    },
    eventTitle: {
      type: "string",
      value: "Team Meeting",
      label: "Event Title",
    },
    eventDescription: {
      type: "string",
      value: "Weekly team sync",
      label: "Event Description",
    },
    eventStart: {
      type: "string",
      value: new Date().toISOString(),
      label: "Event Start",
    },
    eventEnd: {
      type: "string",
      value: new Date(Date.now() + 3600000).toISOString(),
      label: "Event End",
    },
    eventStatus: {
      type: "dropdown",
      value: "ACCEPTED",
      options: ["ACCEPTED", "PENDING", "REJECTED", "CANCELLED", "AWAITING_HOST"],
      label: "Event Status",
    },
    eventDuration: {
      type: "number",
      value: 60,
      label: "Event Duration (minutes)",
    },
    currentlySelectedEventId: {
      type: "number",
      value: 0,
      label: "Currently Selected Event ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const event = {
    id: state.eventId.value,
    title: state.eventTitle.value,
    description: state.eventDescription.value,
    start: state.eventStart.value,
    end: new Date(state.eventEnd.value),
    options: {
      status: state.eventStatus.value,
    },
  };

  return (
    <div style={{ width: '300px', height: '100px' }}>
      <Event
        event={event}
        currentlySelectedEventId={state.currentlySelectedEventId.value}
        eventDuration={state.eventDuration.value}
        disabled={state.disabled.value}
        onEventClick={(event) => console.log('Event clicked:', event)}
      />
    </div>
  );
}