import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/ga4/components/EventTypeAppCardInterface';
import EventTypeAppContext from "@calcom/app-store/EventTypeAppContext";

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
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Google Analytics 4",
        slug: "ga4",
        logo: "https://example.com/ga4-logo.png",
        category: "analytics",
        categories: ["analytics", "tracking"],
        description: "Track your event bookings with Google Analytics 4",
        credentialOwner: null,
        credentialIds: [],
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        userCredentialIds: [],
        credentials: []
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
    getAppData: (key: string) => {
      if (key === "enabled") return true;
      if (key === "credentialId") return null;
      return {};
    },
    setAppData: (key: string, value: unknown) => {},
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