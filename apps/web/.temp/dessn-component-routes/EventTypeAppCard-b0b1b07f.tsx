import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeAppCard } from '../../../../packages/app-store/_components/EventTypeAppCardInterface';


export default function ComponentPreview() {
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
      type: "function",
      value: (key: string) => key,
      label: "Get App Data",
    },
    setAppData: {
      type: "function",
      value: (key: string, value: unknown) => {},
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
      getAppData={state.getAppData.value}
      setAppData={state.setAppData.value}
      LockedIcon={state.LockedIcon.value}
      eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      disabled={state.disabled.value}
    />
  );
}