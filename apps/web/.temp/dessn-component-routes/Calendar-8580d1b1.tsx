import React from 'react';
import { useParentState } from '../useIframeState';
import { Calendar } from '../../../../packages/features/calendars/weeklyview/components/Calendar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    view: {
      type: "dropdown",
      value: "week",
      options: ["month", "week", "day"],
      label: "View",
    },
    startDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
      label: "End Date",
    },
    events: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          title: "Sample Event",
          start: new Date().toISOString(),
          end: new Date(new Date().setHours(new Date().getHours() + 2)).toISOString(),
        },
      ]),
      label: "Events",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    eventsDisabled: {
      type: "boolean",
      value: false,
      label: "Events Disabled",
    },
    startHour: {
      type: "number",
      value: 9,
      label: "Start Hour",
    },
    endHour: {
      type: "number",
      value: 17,
      label: "End Hour",
    },
    scrollToCurrentTime: {
      type: "boolean",
      value: true,
      label: "Scroll to Current Time",
    },
    hideHeader: {
      type: "boolean",
      value: false,
      label: "Hide Header",
    },
  });

  const parsedEvents = JSON.parse(state.events.value);

  return (
    <Calendar
      view={state.view.value as "month" | "week" | "day"}
      startDate={new Date(state.startDate.value)}
      endDate={new Date(state.endDate.value)}
      events={parsedEvents}
      loading={state.loading.value}
      eventsDisabled={state.eventsDisabled.value}
      startHour={state.startHour.value as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23}
      endHour={state.endHour.value as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23}
      scrollToCurrentTime={state.scrollToCurrentTime.value}
      hideHeader={state.hideHeader.value}
      onViewChange={(view) => console.log("View changed:", view)}
      onEventClick={(event) => console.log("Event clicked:", event)}
      onEmptyCellClick={(date) => console.log("Empty cell clicked:", date)}
      onDateChange={(startDate, endDate) => console.log("Date changed:", startDate, endDate)}
    />
  );
}