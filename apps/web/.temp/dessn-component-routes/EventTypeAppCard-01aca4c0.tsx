import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/giphy/components/EventTypeAppCardInterface';
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
        name: "Giphy",
        slug: "giphy",
        description: "Add GIFs to your booking confirmations",
        logo: "https://example.com/giphy-logo.png",
        category: "other",
        url: "https://giphy.com",
        credentialOwner: null,
        credentialIds: [],
        categories: ["other"],
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

  // Mock context values
  const contextValue = {
    getAppData: () => ({}),
    setAppData: () => Promise.resolve(),
    disabled: state.disabled.value,
    appUrl: state.app.value.url,
    LockedIcon: undefined
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