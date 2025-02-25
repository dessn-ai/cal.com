import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/fathom/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trackingId: {
      type: "string",
      value: "ABC123",
      label: "Tracking ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    slug: {
      type: "string",
      value: "fathom",
      label: "Slug",
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

  const mockGetAppData = (key: string) => {
    if (key === "trackingId") return state.trackingId.value;
    return "";
  };

  const mockSetAppData = (key: string, value: string) => {
    if (key === "trackingId") setState("trackingId", value);
  };

  return (
    <ImportedComponent
      eventType={mockEventType}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}