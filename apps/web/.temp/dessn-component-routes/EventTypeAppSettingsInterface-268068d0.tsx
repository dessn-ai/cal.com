import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/ga4/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trackingId: {
      type: "string",
      value: "UA-123456789-1",
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
    description: "This is a sample event description",
    teamId: 2,
    length: 60,
    recurringEvent: null,
    seatsPerTimeSlot: 1,
    team: null,
    URL: "https://example.com/event",
  };

  const mockGetAppData = (key: string) => {
    if (key === "trackingId") {
      return state.trackingId.value;
    }
    return null;
  };

  const mockSetAppData = (key: string, value: any) => {
    if (key === "trackingId") {
      setState("trackingId", value);
    }
  };

  return (
    <ImportedComponent
      eventType={mockEventType}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
      slug="sample-event"
    />
  );
}