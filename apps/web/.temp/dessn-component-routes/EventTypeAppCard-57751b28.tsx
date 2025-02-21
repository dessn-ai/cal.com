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
        logo: "/api/app-store/mockpaymentapp/icon.svg",
        slug: "mock-payment-app",
        category: "payment",
        categories: ["payment"],
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        url: "https://example.com/app",
        variant: "payment",
        type: "mock-payment-app_payment",
        title: "Mock Payment App",
        email: "test@example.com",
        dirName: "mock-payment-app",
        extendsFeature: "payment",
        credentials: [],
        publisher: "Cal.com",
        rating: 5,
        reviews: 0,
        feeType: "usage-based",
        price: 0,
        commission: 0,
        isGlobal: false,
        installed: true
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Initial app data context
  const appData = {
    price: 1000, // Default price (in cents)
    currency: "USD",
    paymentOption: "ON_BOOKING",
    enabled: true
  };

  return (
    <EventTypeAppContext.Provider
      value={{
        appData,
        setAppData: () => {},
        getAppData: (key) => appData[key],
      }}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}