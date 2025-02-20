import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeSelect } from '../../../../packages/features/troubleshooter/components/EventTypeSelect';
import { useTroubleshooterStore } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventTypes: {
      type: "string",
      value: JSON.stringify([
        { id: 1, title: "Meeting", slug: "meeting", length: 30 },
        { id: 2, title: "Interview", slug: "interview", length: 60 },
      ]),
      label: "Event Types",
    },
    selectedEventType: {
      type: "string",
      value: JSON.stringify({ id: 1, slug: "meeting", duration: 30 }),
      label: "Selected Event Type",
    },
  });

  const mockTrpc = {
    viewer: {
      eventTypes: {
        list: {
          useQuery: () => ({
            data: JSON.parse(state.eventTypes.value),
            isPending: false,
          }),
        },
      },
    },
  };

  // Initialize the store with the selected event type
  React.useEffect(() => {
    const selectedEvent = JSON.parse(state.selectedEventType.value);
    useTroubleshooterStore.getState().setEvent(selectedEvent);
  }, [state.selectedEventType.value]);

  return <EventTypeSelect />;
}