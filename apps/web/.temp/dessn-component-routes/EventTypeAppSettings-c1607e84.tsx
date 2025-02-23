import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeAppSettings } from '../../../../packages/app-store/_components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-app",
      label: "Slug",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    eventTypeTitle: {
      type: "string",
      value: "Example Event",
      label: "Event Type Title",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const mockEventType = {
    id: state.eventTypeId.value,
    title: state.eventTypeTitle.value,
    description: "This is an example event description",
    teamId: null,
    length: 60,
    recurringEvent: null,
    seatsPerTimeSlot: null,
    team: null,
    URL: "https://example.com/event",
  };

  const mockGetAppData = () => Promise.resolve({});
  const mockSetAppData = () => Promise.resolve();

  return (
    <EventTypeAppSettings
      slug={state.slug.value}
      eventType={mockEventType}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
    />
  );
}