import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/insihts/components/EventTypeAppCardInterface';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

// Create a mock AtomsContext locally
const AtomsContext = createContext({
  clientId: "",
  accessToken: "",
  organizationId: 0,
  options: { refreshUrl: "", apiUrl: "" },
  error: "",
  getClient: () => undefined,
  isEmbed: false,
  isAuth: true,
  isValidClient: true,
  isInit: true,
  t: (key: string, values: Record<string, string | number | undefined | null>) => key,
  i18n: {
    language: "en" as const,
    defaultLocale: "en" as const,
    locales: ["en"] as const,
    exists: (key: string) => true,
  }
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

  const mockAtomsContext = {
    clientId: "mock-client-id",
    accessToken: "mock-access-token",
    organizationId: 1,
    options: {
      refreshUrl: "https://example.com/refresh",
      apiUrl: "https://example.com/api"
    },
    error: "",
    getClient: () => undefined,
    isEmbed: false,
    isAuth: true,
    isValidClient: true,
    isInit: true,
    t: (key: string, values: Record<string, string | number | undefined | null>) => key,
    i18n: {
      language: "en" as const,
      defaultLocale: "en" as const,
      locales: ["en"] as const,
      exists: (key: string) => true,
    }
  };

  return (
    <AtomsContext.Provider value={mockAtomsContext}>
      <EventTypeAppContext.Provider value={mockAppContext}>
        <ImportedComponent 
          eventType={state.eventType.value}
          app={state.app.value}
          disabled={state.disabled.value}
        />
      </EventTypeAppContext.Provider>
    </AtomsContext.Provider>
  );
}