import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAITab } from '../../../../packages/features/eventtypes/components/tabs/ai/EventAITab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        description: "This is a sample event for preview",
        length: 60,
        slug: "sample-event"
      }),
      label: "Event Type"
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event"
    }
  });

  const eventType = JSON.parse(state.eventType.value);

  return (
    <EventAITab
      eventType={eventType}
      isTeamEvent={state.isTeamEvent.value}
    />
  );
}