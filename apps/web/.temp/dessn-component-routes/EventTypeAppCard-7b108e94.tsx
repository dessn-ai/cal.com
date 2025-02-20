import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/components/EventTypeAppCardInterface';
import EventTypeAppContext from '../../../../packages/app-store/EventTypeAppContext';

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
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "PayPal",
        slug: "paypal",
        logo: "https://example.com/paypal-logo.png",
        description: "Accept payments via PayPal",
        categories: ["payment"],
        isInstalled: true,
        enabled: true,
        credentialOwner: null,
        credentialIds: [],
        isSetupAlready: true
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    eventTypeFormMetadata: {
      type: "object",
      value: {
        apps: {
          paypal: {
            enabled: true,
            price: 1000,
            currency: "USD",
            paymentOption: "HOLD"
          }
        }
      },
      label: "Event Type Form Metadata"
    }
  });

  // Create the context value with proper app data
  const contextValue = {
    getAppData: (key: string) => {
      const appData = state.eventTypeFormMetadata.value.apps?.paypal || {};
      return appData[key as keyof typeof appData] ?? null;
    },
    setAppData: (key: string, value: unknown) => {
      setState((prev) => ({
        ...prev,
        eventTypeFormMetadata: {
          ...prev.eventTypeFormMetadata,
          value: {
            apps: {
              ...prev.eventTypeFormMetadata.value.apps,
              paypal: {
                ...prev.eventTypeFormMetadata.value.apps?.paypal,
                [key]: value,
              },
            },
          },
        },
      }));
    },
    disabled: state.disabled.value,
    LockedIcon: null
  };

  return (
    <EventTypeAppContext.Provider value={contextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
        eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      />
    </EventTypeAppContext.Provider>
  );
}