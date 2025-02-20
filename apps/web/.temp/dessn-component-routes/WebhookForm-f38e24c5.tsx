import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/WebhookForm';

import { WebhookTriggerEvents, TimeUnit } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    webhook: {
      type: "object",
      value: {
        subscriberUrl: "https://example.com/webhook",
        active: true,
        eventTriggers: [WebhookTriggerEvents.BOOKING_CREATED],
        secret: "secret123",
        payloadTemplate: null,
        time: 5,
        timeUnit: TimeUnit.MINUTE,
      },
      label: "Webhook",
    },
    apps: {
      type: "dropdown",
      value: "core",
      options: ["core", "routing-forms"],
      label: "Apps",
    },
    noRoutingFormTriggers: {
      type: "boolean",
      value: false,
      label: "No Routing Form Triggers",
    },
    selectOnlyInstantMeetingOption: {
      type: "boolean",
      value: false,
      label: "Select Only Instant Meeting Option",
    },
  });

  const handleSubmit = (event: any) => {
    console.log("Form submitted:", event);
  };

  return (
    <ImportedComponent
      webhook={state.webhook.value}
      apps={[state.apps.value]}
      onSubmit={handleSubmit}
      noRoutingFormTriggers={state.noRoutingFormTriggers.value}
      selectOnlyInstantMeetingOption={state.selectOnlyInstantMeetingOption.value}
    />
  );
}