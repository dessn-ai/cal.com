import React from 'react';
import { useParentState } from '../useIframeState';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';
import type { AppProps } from '@calcom/types/App';
import EventTypeAppCard from '@calcom/app-store/giphy/components/EventTypeAppCardInterface';

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
        name: "Giphy",
        slug: "giphy",
        description: "Add GIFs to your booking confirmations",
        logo: "https://example.com/giphy-logo.png",
        category: "other",
        url: "https://giphy.com",
        credentialOwner: null,
        credentialIds: [],
        categories: ["other"],
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        variant: "other",
        type: "giphy_other"
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
  const contextValue = {
    getAppData: () => ({ enabled: true }),
    setAppData: () => {},
    disabled: state.disabled.value,
    appUrl: state.app.value.url,
    LockedIcon: null,
  };

  return (
    <EventTypeAppContext.Provider value={contextValue}>
      <EventTypeAppCard
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}