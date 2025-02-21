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

  // Get the setEvent function from the store
  const setEvent = useTroubleshooterStore((state) => state.setEvent);
  const setMonth = useTroubleshooterStore((state) => state.setMonth);

  // Initialize the store
  useEffect(() => {
    // Set initial event data
    setEvent({
      id: 1,
      slug: state.eventSlug.value,
      duration: 30
    });

    // Set initial month to current month
    setMonth(new Date().toISOString().slice(0, 7)); // Format: YYYY-MM
  }, [state.eventSlug.value, setEvent, setMonth]);

  return (
    <div className="min-h-screen bg-white">
      <EventScheduleItem />
    </div>
  );
}