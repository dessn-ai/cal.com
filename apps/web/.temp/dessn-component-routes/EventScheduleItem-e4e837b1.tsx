import React, { useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { EventScheduleItem } from '../../../../packages/features/troubleshooter/components/EventScheduleItem';
import { useTroubleshooterStore } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventSlug: {
      type: "string",
      value: "example-event",
      label: "Event Slug",
    },
  });

  const setEvent = useTroubleshooterStore((state) => state.setEvent);

  useEffect(() => {
    // Initialize the store with the event data
    setEvent({
      id: 1,
      slug: state.eventSlug.value,
      duration: 30
    });
  }, [state.eventSlug.value, setEvent]);

  const mockTrpcContext = {
    viewer: {
      availability: {
        schedule: {
          getScheduleByEventSlug: {
            useQuery: () => ({
              data: {
                name: "Mock Schedule",
                id: "mock-id",
              },
            }),
          },
        },
      },
    },
  };

  return <EventScheduleItem />;
}