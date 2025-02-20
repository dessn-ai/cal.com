import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/salesforce/components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "ROUND_ROBIN",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Salesforce",
        description: "Salesforce integration",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.jpg",
          teamId: 1,
          credentialId: 123,
          readOnly: false
        },
        credentialIds: [123, 456]
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      app={state.app.value}
      disabled={state.disabled.value}
    />
  );
}