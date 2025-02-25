import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hubspot/components/EventTypeAppCardInterface';

// Create mock context
const EventTypeAppContext = React.createContext<{
  getAppData: (key: string) => unknown;
  setAppData: (key: string, value: unknown) => void;
}>({
  getAppData: () => undefined,
  setAppData: () => undefined,
});

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
        category: "crm",
        url: "https://www.hubspot.com",
        slug: "hubspot",
        categories: ["crm"],
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png",
          credentialId: 1
        },
        userCredentialIds: [1, 2, 3],
        credentialIds: [1, 2, 3]
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Mock app context values
  const appContextValue = {
    getAppData: (key: string) => {
      if (key === "enabled") return true;
      if (key === "credentialId") return 1;
      return undefined;
    },
    setAppData: (key: string, value: any) => {
      console.log("Setting app data:", key, value);
    }
  };

  return (
    <EventTypeAppContext.Provider value={appContextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}