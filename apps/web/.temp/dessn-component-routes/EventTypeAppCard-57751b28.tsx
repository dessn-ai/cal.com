import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/mock-payment-app/components/EventTypeAppCardInterface';
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
        name: "Mock Payment App",
        description: "This is a mock payment app for testing",
        logo: "https://example.com/logo.png",
        category: "payment",
        categories: ["payment"],
        slug: "mock-payment-app",
        url: "https://example.com/app",
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

  const appContextValue = {
    appData: {},
    setAppData: () => {},
    getAppData: () => undefined,
    disabled: state.disabled.value,
    LockedIcon: null
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