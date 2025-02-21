import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/pipedrive-crm/components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type description",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event-type"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Pipedrive CRM",
        description: "Pipedrive CRM integration",
        installed: true,
        type: "pipedrive_crm",
        categories: ["crm"],
        logo: "https://example.com/pipedrive-logo.png",
        key: "pipedrive-crm",
        dirName: "pipedrive-crm",
        url: "https://example.com/pipedrive",
        variant: "other",
        extendsFeature: "EventType",
        credentials: [],
        credentialOwner: null,
        credentialIds: []
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