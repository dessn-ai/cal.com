import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/ga4/components/EventTypeAppCardInterface';
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
        name: "Google Analytics 4",
        slug: "ga4",
        logo: "https://example.com/ga4-logo.png",
        category: "analytics",
        description: "Track your event bookings with Google Analytics 4",
        credentialOwner: null,
        credentialIds: [],
        categories: ["analytics"],
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        variant: "other",
        credentials: [],
        dirName: "ga4",
        key: "ga4",
        title: "Google Analytics 4",
        type: "ga4_analytics",
        email: "test@example.com",
        appCategories: ["analytics"],
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Mock the context values that the component needs
  const contextValue = {
    getAppData: () => ({ enabled: true }),
    setAppData: () => {},
    disabled: state.disabled.value,
    appUrl: `${state.app.value.slug}`,
    LockedIcon: null,
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