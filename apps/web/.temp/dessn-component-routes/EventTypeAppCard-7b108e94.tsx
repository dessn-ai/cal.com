import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/components/EventTypeAppCardInterface';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

// Mock next/navigation
const usePathname = () => '/test-path';
const useSearchParams = () => new URLSearchParams();

// Mock useLocale
const useLocale = () => ({
  t: (key: string) => key,
  i18n: {
    language: 'en',
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
        teamId: null,
        length: 60,
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
        name: "PayPal",
        slug: "paypal",
        logo: "https://example.com/paypal-logo.png",
        description: "Accept payments via PayPal",
        categories: ["payment"],
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
        credentialOwner: null,
        credentialIds: [],
        dirName: "paypal"
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    eventTypeFormMetadata: {
      type: "object",
      value: {
        apps: {}
      },
      label: "Event Type Form Metadata"
    }
  });

  const appContextValue = {
    getAppData: (key: string) => {
      if (key === "enabled") return true;
      return null;
    },
    setAppData: (key: string, value: unknown) => {
      console.log("Setting app data:", key, value);
    },
    disabled: false,
    LockedIcon: undefined
  };

  return (
    <EventTypeAppContext.Provider value={appContextValue}>
      <ImportedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
        eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      />
    </EventTypeAppContext.Provider>
  );
}