import React from 'react';
import { useParentState } from '../useIframeState';
import { EventInstantTab } from '../../../../packages/features/eventtypes/components/tabs/instant/EventInstantTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        slug: "sample-event",
        metadata: {},
      }),
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
  });

  const eventType = JSON.parse(state.eventType.value);

  return (
    <EventInstantTab
      eventType={eventType}
      isTeamEvent={state.isTeamEvent.value}
    />
  );
}