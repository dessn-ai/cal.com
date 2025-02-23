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
        userCredentialIds: [], // Empty array instead of undefined
        credentialIds: [],
        isInstalled: false,
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  // Create a state object to store app data
  const [appData, setAppDataState] = React.useState({
    enabled: false,
    TRACKING_ID: "",
    API_HOST: "",
    credentialId: null
  });

  // Mock context values for EventTypeAppContext
  const mockContextValue = {
    getAppData: (key: string) => {
      return appData[key];
    },
    setAppData: (key: string, value: any) => {
      setAppDataState(prev => ({
        ...prev,
        [key]: value
      }));
    },
    Component: ImportedComponent,
    appName: state.app.value.name,
    disabled: state.disabled.value
  };

  return (
    <EventTypeAppContext.Provider value={mockContextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </EventTypeAppContext.Provider>
  );
}