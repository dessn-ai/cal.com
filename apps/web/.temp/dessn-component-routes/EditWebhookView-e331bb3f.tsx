import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhook-edit-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    webhook: {
      type: "dropdown",
      value: "withWebhook",
      options: ["withWebhook", "withoutWebhook"],
      label: "Webhook",
    },
  });

  const mockWebhook = {
    id: "123",
    userId: 1,
    teamId: null,
    subscriberUrl: "https://example.com/webhook",
    payloadTemplate: null,
    active: true,
    eventTriggers: ["BOOKING_CREATED"],
    secret: "secret123",
    platform: false,
  };

  const form = useForm();

  return (
    <ImportedComponent
      webhook={state.webhook.value === "withWebhook" ? mockWebhook : undefined}
    />
  );
}