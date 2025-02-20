import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/WebhookTestDisclosure';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    subscriberUrl: {
      type: "string",
      value: "https://example.com/webhook",
      label: "Subscriber URL",
    },
    secret: {
      type: "string",
      value: "secretKey123",
      label: "Webhook Secret",
    },
    payloadTemplate: {
      type: "string",
      value: "{ \"event\": \"{{event}}\", \"payload\": {{payload}} }",
      label: "Payload Template",
    },
  });

  const methods = useForm({
    defaultValues: {
      subscriberUrl: state.subscriberUrl.value,
      secret: state.secret.value,
      payloadTemplate: state.payloadTemplate.value,
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <ImportedComponent />
      </form>
    </FormProvider>
  );
}