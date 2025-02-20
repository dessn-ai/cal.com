import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAITab } from '../../../../packages/features/eventtypes/components/tabs/ai/EventAITab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        slug: "sample-event",
        length: 30,
        description: "This is a sample event description",
        hidden: false,
        requiresConfirmation: false,
        disableGuests: false,
        hideCalendarNotes: false,
        minimumBookingNotice: 60,
        price: 0,
        currency: "USD",
        schedulingType: null,
        seatsPerTimeSlot: null,
        metadata: {},
        customInputs: [],
        users: [],
        locations: [],
        bookingFields: [],
      },
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
  });

  return (
    <EventAITab
      eventType={state.eventType.value}
      isTeamEvent={state.isTeamEvent.value}
    />
  );
}