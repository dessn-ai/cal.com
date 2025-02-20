import React from 'react';
import { useParentState } from '../useIframeState';
import { EventWebhooksTab } from '../../../../packages/features/eventtypes/components/tabs/webhooks/EventWebhooksTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type for preview",
        length: 30,
        slug: "sample-event",
        hidden: false,
        teamId: null,
        userId: 1,
        webhooks: [],
      },
      label: "Event Type",
    },
  });

  return <EventWebhooksTab eventType={state.eventType.value} />;
}