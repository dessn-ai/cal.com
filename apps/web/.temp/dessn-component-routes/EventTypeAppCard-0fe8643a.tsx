import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/posthog/components/EventTypeAppCardInterface';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type description",
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
        name: "Posthog",
        description: "Posthog integration",
        installed: true,
        variant: "other",
        categories: ["analytics"],
        logo: "https://example.com/posthog-logo.png",
        publisher: "Cal.com",
        url: "https://posthog.com",
        verified: true,
        rating: 4.5,
        reviews: 100,
        category: "analytics",
        slug: "posthog",
        type: "posthog_other_calendar",
        title: "Posthog",
        imageSrc: "https://example.com/posthog-logo.png",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png",
          credentialId: 1
        },
        userCredentialIds: [1, 2, 3],
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

  // Mock data for EventTypeAppContext
  const contextValue = {
    appData: {},
    setAppData: () => {},
    getAppData: (key: string) => {
      if (key === 'enabled') return true;
      if (key === 'credentialId') return 1;
      return undefined;
    },
    disabled: false
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