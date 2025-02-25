import React, { useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeSelect } from '@calcom/features/troubleshooter/components/EventTypeSelect';
import { useTroubleshooterStore } from '@calcom/features/troubleshooter/store';

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

  // Get the setEvent function from the store
  const setEvent = useTroubleshooterStore((state) => state.setEvent);

  // Initialize the event in the store when the component mounts or when selectedEventType changes
  useEffect(() => {
    try {
      const selectedEvent = JSON.parse(state.selectedEventType.value);
      setEvent(selectedEvent);
    } catch (error) {
      console.error('Failed to parse selected event:', error);
    }
  }, [state.selectedEventType.value, setEvent]);

  // Mock TRPC for the component
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

  return <EventTypeSelect />;
}