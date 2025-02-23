import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeAppCard } from '../../../../packages/app-store/_components/EventTypeAppCardInterface';

export default function ComponentPreview() {
  // Create local mock functions
  const mockGetAppData = (key: string) => key;
  const mockSetAppData = (key: string, value: unknown) => {
    console.log('Setting app data:', key, value);
  };

  const [state, setState] = useParentState({
    app: {
      type: "object",
      value: {
        name: "Sample App",
        slug: "sample-app",
      },
      label: "App",
    },
    eventType: {
      type: "object",
      value: {
        title: "Sample Event Type",
        description: "This is a sample event type",
        id: 1,
        length: 30,
        URL: "sample-event-type",
      },
      label: "Event Type",
    },
    getAppData: {
      type: "string",
      value: "mockGetAppData",
      label: "Get App Data",
    },
    setAppData: {
      type: "string",
      value: "mockSetAppData",
      label: "Set App Data",
    },
    LockedIcon: {
      type: "boolean",
      value: false,
      label: "Locked Icon",
    },
    eventTypeFormMetadata: {
      type: "object",
      value: {},
      label: "Event Type Form Metadata",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <EventTypeAppCard
      app={state.app.value}
      eventType={state.eventType.value}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      LockedIcon={state.LockedIcon.value}
      eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      disabled={state.disabled.value}
    />
  );
}