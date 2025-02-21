import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/WebhookListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    webhook: {
      type: "dropdown",
      value: JSON.stringify({
        id: "1",
        subscriberUrl: "https://example.com/webhook",
        payloadTemplate: null,
        active: true,
        eventTriggers: ["BOOKING_CREATED", "BOOKING_CANCELLED"],
        secret: null,
        eventTypeId: null,
        teamId: null
      }),
      options: [
        JSON.stringify({
          id: "1",
          subscriberUrl: "https://example.com/webhook",
          payloadTemplate: null,
          active: true,
          eventTriggers: ["BOOKING_CREATED", "BOOKING_CANCELLED"],
          secret: null,
          eventTypeId: null,
          teamId: null
        }),
        JSON.stringify({
          id: "2",
          subscriberUrl: "https://test.com/webhook",
          payloadTemplate: null,
          active: false,
          eventTriggers: ["BOOKING_RESCHEDULED"],
          secret: "secret123",
          eventTypeId: 1,
          teamId: 2
        })
      ],
      label: "Webhook"
    },
    canEditWebhook: {
      type: "boolean",
      value: true,
      label: "Can Edit Webhook"
    },
    lastItem: {
      type: "boolean",
      value: false,
      label: "Last Item"
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only"
    }
  });

  return (
    <ImportedComponent
      webhook={JSON.parse(state.webhook.value)}
      canEditWebhook={state.canEditWebhook.value}
      onEditWebhook={() => console.log("Edit webhook")}
      lastItem={state.lastItem.value}
      readOnly={state.readOnly.value}
    />
  );
}