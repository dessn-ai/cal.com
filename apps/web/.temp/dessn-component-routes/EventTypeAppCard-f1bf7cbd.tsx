import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/alby/components/EventTypeAppCardInterface';


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
        schedulingType: null,
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Alby",
        slug: "alby",
        logo: "https://example.com/alby-logo.png",
        description: "Bitcoin lightning payments",
        categories: ["payment"],
        publisher: "Cal.com",
        url: "https://getalby.com",
        verified: true,
        rating: 4.5,
        reviews: 100,
        installed: true
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