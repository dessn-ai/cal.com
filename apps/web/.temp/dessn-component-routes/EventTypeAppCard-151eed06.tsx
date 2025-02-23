import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/umami/components/EventTypeAppCardInterface';
import EventTypeAppContext from "@calcom/app-store/EventTypeAppContext";

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
        categories: ["analytics"],
        slug: "umami",
        enabled: true,
        isInstalled: true,
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

  // Mock the context values
  const mockContextValue = {
    getAppData: (key: string) => "",
    setAppData: (key: string, value: any) => {},
    disabled: false,
    LockedIcon: null,
  };

  return (
    <EventTypeAppContext.Provider value={mockContextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}