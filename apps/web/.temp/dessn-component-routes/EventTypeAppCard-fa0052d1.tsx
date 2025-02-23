import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/gtm/components/EventTypeAppCardInterface';
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
        name: "Google Tag Manager",
        slug: "gtm",
        logo: "https://example.com/gtm-logo.png",
        category: "analytics",
        description: "Google Tag Manager integration",
        credentialOwner: null,
        credentialIds: [],
        categories: ["analytics"],
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

  return (
    <EventTypeAppContext.Provider
      value={{
        getAppData: () => ({}),
        setAppData: () => {},
        disabled: state.disabled.value,
        LockedIcon: undefined,
      }}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}