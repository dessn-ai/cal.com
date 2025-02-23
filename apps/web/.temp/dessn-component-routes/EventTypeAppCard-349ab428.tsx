import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hubspot/components/EventTypeAppCardInterface';
import EventTypeAppContext from "@calcom/app-store/EventTypeAppContext";

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
        name: "Hubspot",
        description: "Hubspot integration",
        logo: "https://example.com/hubspot-logo.png",
        categories: ["crm", "marketing"],
        category: "crm",
        url: "https://www.hubspot.com",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png",
          credentialId: 1
        },
        userCredentialIds: [1, 2, 3],
        credentialIds: [1, 2, 3],
        slug: "hubspot",
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

  // Mock data for EventTypeAppContext
  const contextValue = {
    appData: {
      enabled: true,
      credentialId: 1
    },
    setAppData: () => {},
    getAppData: (key: string) => {
      if (key === "enabled") return true;
      if (key === "credentialId") return 1;
      return undefined;
    }
  };

  return (
    <EventTypeAppContext.Provider value={contextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}