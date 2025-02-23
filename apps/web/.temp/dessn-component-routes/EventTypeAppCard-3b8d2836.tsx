import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/basecamp3/components/EventTypeAppCardInterface';

// Create a mock context
const AppContext = React.createContext({
  getAppData: (key: string) => {
    if (key === 'enabled') return true;
    if (key === 'credentialId') return 1;
    return undefined;
  },
  setAppData: () => {},
});

// Mock the useAppContextWithSchema hook
React.createContext = ((createContext) => {
  return (defaultValue) => {
    if (defaultValue === undefined) {
      return AppContext;
    }
    return createContext(defaultValue);
  };
})(React.createContext);

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
        URL: "https://example.com/event",
        metadata: {},
        apps: {
          basecamp3: {
            enabled: true
          }
        }
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Basecamp 3",
        slug: "basecamp3",
        logo: "https://example.com/basecamp3-logo.png",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png",
          credentialId: 1
        },
        userCredentialIds: [1, 2, 3],
        credentialIds: [1, 2, 3],
        categories: ["calendar"],
        enabled: true,
        dirName: "basecamp3",
        features: ["scheduling"],
        isInstalled: true,
        variant: "other",
        locationOption: { value: "basecamp3", label: "Basecamp 3" }
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
    <AppContext.Provider 
      value={{
        getAppData: (key: string) => {
          if (key === 'enabled') return true;
          if (key === 'credentialId') return 1;
          return undefined;
        },
        setAppData: () => {},
      }}
    >
      <div className="app-card-wrapper">
        <ImportedComponent
          eventType={state.eventType.value}
          app={{
            ...state.app.value,
            isInstalled: true,
            enabled: true,
            userCredentialIds: [1, 2, 3],
            credentialOwner: {
              ...state.app.value.credentialOwner,
              credentialId: 1
            }
          }}
          disabled={state.disabled.value}
        />
      </div>
    </AppContext.Provider>
  );
}