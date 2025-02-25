import React from 'react';
import { useParentState } from '../useIframeState';
import { EventWebhooksTab } from '../../../../packages/features/eventtypes/components/tabs/webhooks/EventWebhooksTab';
import { FormProvider, useForm } from 'react-hook-form';

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
      },
      label: "Event Type",
    },
  });

  const formMethods = useForm({
    defaultValues: {
      title: state.eventType.value.title,
      slug: state.eventType.value.slug,
      description: state.eventType.value.description,
      length: state.eventType.value.length,
    }
  });

  return (
    <FormProvider {...formMethods}>
      <EventWebhooksTab
        eventType={state.eventType.value}
      />
    </FormProvider>
  );
}