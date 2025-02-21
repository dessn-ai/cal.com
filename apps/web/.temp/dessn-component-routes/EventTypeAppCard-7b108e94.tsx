import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/components/EventTypeAppCardInterface';
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
        logo: "https://app-store-assets.cal.com/paypal/icon.svg",
        description: "Accept payments via PayPal",
        categories: ["payment", "calendar"],
        category: "payment",
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        credentialOwner: null,
        credentialIds: [],
        dirName: "paypal",
        email: "demo@paypal.com",
        installed: true,
        type: "paypal_payment",
        title: "PayPal",
        variant: "payment",
        price: 0,
        trending: false,
        rating: 5,
        reviews: 1,
        verified: true,
        locationOption: "conferencing",
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
        price: 0,
        enabled: true,
        currency: "USD",
      },
      label: "Event Type Form Metadata"
    }
  });

  const contextValue = {
    getAppData: (key: string) => {
      if (key === "enabled") return true;
      if (key === "price") return 0;
      if (key === "currency") return "USD";
      return undefined;
    },
    setAppData: (key: string, value: unknown) => {
      console.log("Setting app data", key, value);
    },
    disabled: false,
    LockedIcon: undefined,
  };

  return (
    <EventTypeAppContext.Provider value={contextValue}>
      <div className="w-full">
        <ImportedComponent
          eventType={state.eventType.value}
          app={state.app.value}
          disabled={state.disabled.value}
          eventTypeFormMetadata={state.eventTypeFormMetadata.value}
        />
      </div>
    </EventTypeAppContext.Provider>
  );
}