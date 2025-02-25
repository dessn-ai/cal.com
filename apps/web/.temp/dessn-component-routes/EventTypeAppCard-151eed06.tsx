import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/umami/components/EventTypeAppCardInterface';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
        teamId: null,
        length: 30,
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
        name: "Umami",
        description: "Privacy-focused website analytics",
        logo: "https://example.com/umami-logo.png",
        category: "analytics",
        url: "https://umami.is",
        credentialOwner: null,
        credentialIds: [],
        // Add missing required properties
        slug: "umami",
        categories: ["analytics"],
        isInstalled: true,
        enabled: true,
        isSetupAlready: true
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