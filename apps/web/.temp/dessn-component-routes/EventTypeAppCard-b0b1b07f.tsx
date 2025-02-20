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
      type: "string",
      value: "mockGetAppData",
      label: "Get App Data",
    },
    setAppData: {
      type: "string",
      value: "mockSetAppData",
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

  // Create mock functions that can be safely passed to the component
  const mockGetAppData = React.useCallback((key: string) => {
    console.log('Mock getAppData called with:', key);
    return null;
  }, []);

  const mockSetAppData = React.useCallback((key: string, value: unknown) => {
    console.log('Mock setAppData called with:', key, value);
  }, []);

  return (
    <EventTypeAppCard
      app={state.app.value}
      eventType={state.eventType.value}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      eventTypeFormMetadata={state.eventTypeFormMetadata.value}
      disabled={state.disabled.value}
    />
  );
}