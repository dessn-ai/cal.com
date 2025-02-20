import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/recurring/RecurringEventController';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'object',
      value: {
        recurringEvent: null,
      },
      label: 'Event Type',
    },
    paymentEnabled: {
      type: 'boolean',
      value: false,
      label: 'Payment Enabled',
    },
  });

  const methods = useForm({
    defaultValues: {
      recurringEvent: null,
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        eventType={state.eventType.value}
        paymentEnabled={state.paymentEnabled.value}
      />
    </FormProvider>
  );
}