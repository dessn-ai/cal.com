import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/gtm/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trackingId: {
      type: "string",
      value: "GTM-XXXXXXX",
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
    teamId: null,
    length: 60,
    recurringEvent: null,
    seatsPerTimeSlot: null,
    team: null,
    URL: "https://example.com/event",
  };

  const mockGetAppData = (key: string) => {
    if (key === "trackingId") return state.trackingId.value;
    return null;
  };

  const mockSetAppData = (key: string, value: any) => {
    if (key === "trackingId") setState("trackingId", value);
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