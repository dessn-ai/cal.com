import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/ga4/components/EventTypeAppCardInterface';

// Create a mock context
const MockEventTypeAppContext = React.createContext({
  getAppData: () => ({}),
  setAppData: () => {},
  disabled: false,
});

// Mock the useIsAppEnabled hook
const mockUseIsAppEnabled = () => ({
  enabled: true,
  updateEnabled: () => {},
});

// Add the mock to window
if (typeof window !== 'undefined') {
  // @ts-ignore - Mocking the hooks for preview purposes
  window.useAppContextWithSchema = () => ({
    getAppData: () => ({}),
    setAppData: () => {},
    disabled: false,
  });
  // @ts-ignore
  window.useIsAppEnabled = mockUseIsAppEnabled;
}

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
        categories: ["analytics"],
        isInstalled: true,
        enabled: true,
        credentialOwner: null,
        credentialIds: [],
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

  // Mock the context values
  const contextValue = {
    getAppData: () => ({}),
    setAppData: () => {},
    disabled: state.disabled.value,
  };

  return (
    <MockEventTypeAppContext.Provider value={contextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </MockEventTypeAppContext.Provider>
  );
}