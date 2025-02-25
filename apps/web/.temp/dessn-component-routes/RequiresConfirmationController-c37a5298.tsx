import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/advanced/RequiresConfirmationController';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    metadata: {
      type: 'object',
      value: {
        requiresConfirmationThreshold: {
          time: 30,
          unit: 'minutes'
        }
      },
      label: 'Metadata'
    },
    requiresConfirmation: {
      type: 'boolean',
      value: true,
      label: 'Requires Confirmation'
    },
    requiresConfirmationWillBlockSlot: {
      type: 'boolean',
      value: false,
      label: 'Requires Confirmation Will Block Slot'
    },
    seatsEnabled: {
      type: 'boolean',
      value: false,
      label: 'Seats Enabled'
    },
    eventType: {
      type: 'object',
      value: {},
      label: 'Event Type'
    }
  });

  const methods = useForm({
    defaultValues: {
      requiresConfirmation: state.requiresConfirmation.value,
      requiresConfirmationWillBlockSlot: state.requiresConfirmationWillBlockSlot.value,
      metadata: state.metadata.value,
    }
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        metadata={state.metadata.value}
        requiresConfirmation={state.requiresConfirmation.value}
        requiresConfirmationWillBlockSlot={state.requiresConfirmationWillBlockSlot.value}
        onRequiresConfirmation={(value) => setState('requiresConfirmation', value)}
        seatsEnabled={state.seatsEnabled.value}
        eventType={state.eventType.value}
      />
    </FormProvider>
  );
}