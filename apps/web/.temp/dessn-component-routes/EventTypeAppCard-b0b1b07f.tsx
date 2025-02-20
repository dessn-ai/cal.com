import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeAppCard } from '../../../../packages/app-store/_components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    app: {
      type: "object",
      value: {
        name: "Test App",
        slug: "test-app",
      },
      label: "App",
    },
    eventType: {
      type: "object",
      value: {
        title: "Test Event Type",
        description: "This is a test event type",
        id: 1,
        length: 30,
        URL: "test-event-type",
      },
      label: "Event Type",
    },
    getAppData: {
      type: "function",
      value: (key: string) => key,
      label: "Get App Data",
    },
    setAppData: {
      type: "function",
      value: (key: string, value: unknown) => console.log(key, value),
      label: "Set App Data",
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
      getAppData={state.getAppData.value}
      setAppData={state.setAppData.value}
      eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      disabled={state.disabled.value}
    />
  );
}