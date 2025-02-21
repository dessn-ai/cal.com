import React from 'react';
import { useParentState } from '../useIframeState';
import { DestinationCalendarSelector } from '../../../../packages/platform/atoms/destination-calendar/DestinationCalendarSelector';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    connectedCalendars: {
      type: "string",
      value: JSON.stringify([
        {
          credentialId: 1,
          integration: { title: "Google Calendar" },
          primary: { name: "Primary Calendar", integration: "google_calendar" },
          calendars: [
            { readOnly: false, name: "Work", integration: "google_calendar", externalId: "work@example.com" },
            { readOnly: false, name: "Personal", integration: "google_calendar", externalId: "personal@example.com" }
          ]
        }
      ]),
      label: "Connected Calendars"
    },
    destinationCalendar: {
      type: "string",
      value: JSON.stringify({
        name: "Default Calendar",
        integrationTitle: "Google Calendar",
        primaryEmail: "default@example.com"
      }),
      label: "Destination Calendar"
    },
    value: {
      type: "string",
      value: "work@example.com",
      label: "Selected Calendar"
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending"
    },
    hidePlaceholder: {
      type: "boolean",
      value: false,
      label: "Hide Placeholder"
    },
    maxWidth: {
      type: "number",
      value: 300,
      label: "Max Width"
    },
    hideAdvancedText: {
      type: "boolean",
      value: false,
      label: "Hide Advanced Text"
    }
  });

  return (
    <DestinationCalendarSelector
      connectedCalendars={JSON.parse(state.connectedCalendars.value)}
      destinationCalendar={JSON.parse(state.destinationCalendar.value)}
      onChange={(value) => console.log("Calendar changed:", value)}
      isPending={state.isPending.value}
      hidePlaceholder={state.hidePlaceholder.value}
      value={state.value.value}
      maxWidth={state.maxWidth.value}
      hideAdvancedText={state.hideAdvancedText.value}
    />
  );
}