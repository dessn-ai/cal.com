import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '@calcom/app-store/gtm/components/EventTypeAppCardInterface';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

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
        name: "Google Tag Manager",
        slug: "gtm",
        logo: "https://example.com/gtm-logo.png",
        category: "analytics",
        description: "Google Tag Manager integration",
        categories: ["analytics"],
        enabled: true,
        installed: true,
        isInstalled: true,
        isSetupAlready: true,
        credentialOwner: null,
        credentialIds: [],
        credentials: [],
        dirName: "gtm"
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Mock context values
  const contextValue = {
    getAppData: () => ({ enabled: true }),
    setAppData: () => Promise.resolve(),
    disabled: state.disabled.value,
    appUrl: `/apps/${state.app.value.slug}`,
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