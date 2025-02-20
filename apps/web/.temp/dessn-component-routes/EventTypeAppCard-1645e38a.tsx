import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/templates/booking-pages-tag/components/EventTypeAppCardInterface';
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
        team: {
          id: null,
          name: "Sample Team"
        },
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
        logo: "https://example.com/logo.png",
        categories: ["calendar"],
        category: "calendar",
        url: "https://example.com",
        slug: "sample-app",
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png"
        },
        credentialIds: [1, 2, 3]
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
        getAppData: (key: string) => {
          if (key === "enabled") return true;
          if (key === "trackingId") return "";
          return undefined;
        },
        setAppData: () => {},
        LockedIcon: undefined,
        disabled: false
      }}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}