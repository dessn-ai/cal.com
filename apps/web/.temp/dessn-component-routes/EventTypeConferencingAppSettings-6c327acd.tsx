import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the necessary types
type SchedulingType = "ROUND_ROBIN" | "COLLECTIVE" | "MANAGED";

// Mock component that represents the original functionality
const MockEventTypeConferencingAppSettings = ({ 
  eventType, 
  slug 
}: { 
  eventType: any; 
  slug: string 
}) => {
  return (
    <div>
      <h3>Event Type Conferencing Settings</h3>
      <p>Event Type: {eventType.title}</p>
      <p>Scheduling Type: {eventType.schedulingType}</p>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
        teamId: null,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        URL: "https://example.com/event",
        schedulingType: "ROUND_ROBIN" as SchedulingType,
        slug: "sample-event",
        metadata: {},
        position: 0,
        destinationCalendar: null,
        selected: false,
        locations: [],
        bookingFields: [],
      },
      label: "Event Type",
    },
    slug: {
      type: "string",
      value: "sample-app",
      label: "Slug",
    },
  });

  return (
    <MockEventTypeConferencingAppSettings
      eventType={state.eventType.value}
      slug={state.slug.value}
    />
  );
}