import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/insihts/components/EventTypeAppCardInterface';

import { AppContextProvider } from '@calcom/app-store/EventTypeAppContext';

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
        name: "Sample App",
        description: "This is a sample app",
        installed: true,
        categories: ["calendar"],
        logo: "https://example.com/logo.png",
        publisher: "Sample Publisher",
        url: "https://example.com",
        variant: "OTHER",
        type: "sample_app_type"
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
    getAppData: () => "mockSiteId",
    setAppData: () => {},
    disabled: state.disabled.value
  };

  return (
    <AppContextProvider value={mockAppContext}>
      <ImportedComponent 
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </AppContextProvider>
  );
}