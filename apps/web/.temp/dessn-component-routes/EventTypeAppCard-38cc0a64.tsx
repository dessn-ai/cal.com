import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/matomo/components/EventTypeAppCardInterface';
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
        name: "Matomo",
        slug: "matomo",
        logo: "https://example.com/matomo-logo.png",
        category: "analytics",
        categories: ["analytics"],
        url: "https://matomo.org",
        description: "Matomo Analytics Integration",
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        credentialOwner: null
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const mockAppContext = {
    getAppData: () => "",
    setAppData: () => {},
    disabled: state.disabled.value,
    LockedIcon: undefined
  };

  return (
    <EventTypeAppContext.Provider value={mockAppContext}>
      <ImportedComponent 
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}