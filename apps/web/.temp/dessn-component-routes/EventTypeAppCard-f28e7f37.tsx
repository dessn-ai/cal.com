import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/closecom/components/EventTypeAppCardInterface';

// Create the EventTypeAppContext
const EventTypeAppContext = React.createContext({
  getAppData: (key: string) => {
    if (key === 'enabled') return true;
    if (key === 'credentialId') return 1;
    return undefined;
  },
  setAppData: (key: string, value: any) => {
    console.log('setAppData:', key, value);
  },
  LockedIcon: null,
  disabled: false
});

// Create a wrapper component that provides all necessary contexts
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EventTypeAppContext.Provider 
      value={{
        getAppData: (key: string) => {
          if (key === 'enabled') return true;
          if (key === 'credentialId') return 1;
          return undefined;
        },
        setAppData: (key: string, value: any) => {
          console.log('setAppData:', key, value);
        },
        LockedIcon: null,
        disabled: false
      }}
    >
      {children}
    </EventTypeAppContext.Provider>
  );
};

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
        URL: "https://example.com/event-type",
        appIds: ["closecom"]
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Close.com",
        description: "Close.com integration",
        installed: true,
        type: "closecom_other_calendar",
        variant: "other_calendar",
        key: "closecom",
        slug: "closecom",
        logo: "https://app.close.com/static/img/close-logo.png",
        categories: ["calendar"],
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.jpg",
          credentialId: 1
        },
        credentialIds: [1, 2, 3],
        features: ["calendar"],
        userCredentialIds: [1, 2, 3],
        dirName: "closecom"
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  try {
    return (
      <AppContextProvider>
        <ImportedComponent
          eventType={state.eventType.value}
          app={state.app.value}
          disabled={state.disabled.value}
        />
      </AppContextProvider>
    );
  } catch (error) {
    console.error('Render error:', error);
    return <div>Error rendering component: {error.message}</div>;
  }
}