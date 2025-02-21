import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/installation/EventTypeConferencingAppSettings';

import { SchedulingType } from '@calcom/prisma/client';

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
        schedulingType: SchedulingType.ROUND_ROBIN,
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
    <ImportedComponent
      eventType={state.eventType.value}
      slug={state.slug.value}
    />
  );
}