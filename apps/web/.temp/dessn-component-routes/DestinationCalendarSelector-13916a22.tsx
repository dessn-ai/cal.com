import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/calendars/DestinationCalendarSelector';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "calendar1",
      label: "Selected Calendar Value",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    hidePlaceholder: {
      type: "boolean",
      value: false,
      label: "Hide Placeholder",
    },
    maxWidth: {
      type: "number",
      value: 300,
      label: "Max Width",
    },
    hideAdvancedText: {
      type: "boolean",
      value: false,
      label: "Hide Advanced Text",
    },
  });

  const mockCalendarsQueryData = {
    connectedCalendars: [
      {
        credentialId: "cred1",
        integration: { title: "Google Calendar" },
        primary: { name: "Primary Calendar", email: "user@example.com" },
        calendars: [
          { name: "Calendar 1", integration: "google", externalId: "calendar1", readOnly: false },
          { name: "Calendar 2", integration: "google", externalId: "calendar2", readOnly: false },
        ],
      },
    ],
    destinationCalendar: {
      name: "Default Calendar",
      integrationTitle: "Google",
      primaryEmail: "user@example.com",
    },
  };

  return (
    <ImportedComponent
      onChange={(value) => console.log("Calendar changed:", value)}
      value={state.value.value}
      isPending={state.isPending.value}
      hidePlaceholder={state.hidePlaceholder.value}
      maxWidth={state.maxWidth.value}
      hideAdvancedText={state.hideAdvancedText.value}
      calendarsQueryData={mockCalendarsQueryData}
    />
  );
}