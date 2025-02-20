import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/salesforce/components/EventTypeAppCardInterface';

// Create a mock context that matches the interface needed
const MockEventTypeAppContext = React.createContext<{
  getAppData: (key: string) => unknown;
  setAppData: (key: string, value: unknown) => void;
  disabled?: boolean;
}>({
  getAppData: () => undefined,
  setAppData: () => undefined,
  disabled: false,
});

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
        schedulingType: "ROUND_ROBIN",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Salesforce",
        description: "Salesforce integration",
        logo: "/api/app-store/salesforce/icon.svg",
        slug: "salesforce",
        categories: ["crm"],
        enabled: true,
        isInstalled: true,
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.jpg",
          teamId: 1,
          credentialId: 123,
          readOnly: false
        },
        credentialIds: [123, 456],
        userCredentialIds: [123, 456]
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const [appData, setAppDataState] = React.useState({
    enabled: false,
    credentialId: null,
  });

  const appContextValue = {
    getAppData: (key: string) => {
      return appData[key as keyof typeof appData];
    },
    setAppData: (key: string, value: unknown) => {
      setAppDataState((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    disabled: state.disabled.value,
  };

  return (
    <MockEventTypeAppContext.Provider value={appContextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </MockEventTypeAppContext.Provider>
  );
}