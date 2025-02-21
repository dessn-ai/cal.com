import React from 'react';
import { useParentState } from '../useIframeState';
import { EventRecurringTab } from '../../../../packages/features/eventtypes/components/tabs/recurring/EventRecurringTab';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        title: 'Sample Event',
        slug: 'sample-event',
        length: 60,
        metadata: {},
      }),
      label: 'Event Type',
    },
    customClassNames: {
      type: 'string',
      value: JSON.stringify({
        container: 'custom-container',
        recurringToggle: {
          container: 'custom-toggle-container',
          label: 'custom-toggle-label',
        },
        frequencyInput: {
          container: 'custom-frequency-container',
          input: 'custom-frequency-input',
        },
        frequencyUnitSelect: {
          select: 'custom-frequency-select',
          label: 'custom-frequency-label',
        },
        maxEventsInput: {
          container: 'custom-max-events-container',
          countInput: 'custom-max-events-input',
        },
        experimentalAlert: 'custom-experimental-alert',
        paymentAlert: 'custom-payment-alert',
      }),
      label: 'Custom Class Names',
    },
  });

  const eventType = JSON.parse(state.eventType.value);
  const customClassNames = JSON.parse(state.customClassNames.value);
  
  const formMethods = useForm({
    defaultValues: {
      recurringEvent: null,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <EventRecurringTab
        eventType={eventType}
        customClassNames={customClassNames}
      />
    </FormProvider>
  );
}