import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/umami/components/EventTypeAppCardInterface';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

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
        categories: ["analytics"],
        category: "analytics",
        url: "https://umami.is",
        credentialOwner: null,
        credentialIds: [],
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

  // Mock app data context values
  const appContextValue = {
    getAppData: (key: string) => {
      const defaultValues = {
        SITE_ID: "",
        SCRIPT_URL: "https://us.umami.is/script.js",
        enabled: true
      };
      return defaultValues[key] || "";
    },
    setAppData: (key: string, value: string) => {
      console.log('Setting app data:', key, value);
    },
    disabled: state.disabled.value,
    LockedIcon: undefined
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