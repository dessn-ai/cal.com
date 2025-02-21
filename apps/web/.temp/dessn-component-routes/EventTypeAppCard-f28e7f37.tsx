import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/closecom/components/EventTypeAppCardInterface';
import EventTypeAppContext from '../../../../packages/app-store/EventTypeAppContext';

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
        name: "Close.com",
        description: "Close.com integration",
        installed: true,
        type: "closecom_other_calendar",
        variant: "other_calendar",
        key: "closecom",
        slug: "closecom",
        logo: "/api/app-store/closecom/icon.svg",
        categories: ["calendar"],
        category: "calendar",
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.jpg",
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

  // Mock app context data
  const appContextValue = {
    appData: {
      enabled: true,
      credentialId: 1
    },
    setAppData: (key: string, value: any) => {
      console.log('Setting app data:', key, value);
    },
    getAppData: (key: string) => {
      if (key === 'enabled') return true;
      if (key === 'credentialId') return 1;
      return undefined;
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