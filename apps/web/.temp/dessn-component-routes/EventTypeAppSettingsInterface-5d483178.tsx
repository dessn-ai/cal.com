import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/basecamp3/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        description: "This is a sample event",
        teamId: 2,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: 1,
        team: null,
        URL: "https://example.com/event"
      }),
      label: "Event Type"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    slug: {
      type: "string",
      value: "sample-event",
      label: "Slug"
    }
  });

  const mockGetAppData = () => ({});
  const mockSetAppData = () => {};

  return (
    <ImportedComponent
      eventType={JSON.parse(state.eventType.value)}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}