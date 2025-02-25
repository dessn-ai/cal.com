import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/metapixel/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trackingId: {
      type: "string",
      value: "123456789",
      label: "Tracking ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const mockEventType = {
    id: 1,
    title: "Sample Event",
    description: "This is a sample event",
    teamId: 2,
    length: 60,
    recurringEvent: null,
    seatsPerTimeSlot: 1,
    team: null,
    URL: "https://example.com/event",
  };

  const getAppData = (key: string) => {
    return state.trackingId.value;
  };

  const setAppData = (key: string, value: string) => {
    setState('trackingId', value);
  };

  return (
    <ImportedComponent
      eventType={mockEventType}
      getAppData={getAppData}
      setAppData={setAppData}
      disabled={state.disabled.value}
      slug="sample-event"
    />
  );
}