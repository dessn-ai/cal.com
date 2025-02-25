import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/EventTypeWebhookListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    subscriberUrl: {
      type: "string",
      value: "https://example.com/webhook",
      label: "Subscriber URL",
    },
    active: {
      type: "boolean",
      value: true,
      label: "Active",
    },
    eventTriggers: {
      type: "dropdown",
      value: "BOOKING_CREATED",
      options: ["BOOKING_CREATED", "BOOKING_RESCHEDULED", "BOOKING_CANCELLED"],
      label: "Event Triggers",
    },
    lastItem: {
      type: "boolean",
      value: false,
      label: "Last Item",
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
  });

  const webhook = {
    id: "1",
    subscriberUrl: state.subscriberUrl.value,
    payloadTemplate: null,
    active: state.active.value,
    eventTriggers: [state.eventTriggers.value],
    secret: null,
    eventTypeId: null,
    teamId: null,
  };

  return (
    <ImportedComponent
      webhook={webhook}
      onEditWebhook={() => console.log("Edit webhook")}
      lastItem={state.lastItem.value}
      readOnly={state.readOnly.value}
    />
  );
}