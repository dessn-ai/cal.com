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
        categories: ["payment"],
        slug: "mock-payment-app",
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        url: "https://example.com/app"
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Initial app data that the context needs
  const appData = {
    enabled: true,
    price: 1000, // Price in cents
    currency: "USD",
    paymentOption: "HOLD",
  };

  return (
    <EventTypeAppContext.Provider
      value={{
        appData,
        setAppData: () => {},
        getAppData: (key) => appData[key],
        disabled: false,
        LockedIcon: null,
      }}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}