import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
        teamId: null,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "PayPal",
        slug: "paypal",
        logo: "https://example.com/paypal-logo.png",
        description: "Accept payments via PayPal",
        credentialOwner: null,
        credentialIds: []
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    eventTypeFormMetadata: {
      type: "object",
      value: {},
      label: "Event Type Form Metadata"
    }
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      app={state.app.value}
      disabled={state.disabled.value}
      eventTypeFormMetadata={state.eventTypeFormMetadata.value}
    />
  );
}