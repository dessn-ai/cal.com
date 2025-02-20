import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/advanced/RequiresConfirmationController';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    metadata: {
      type: "string",
      value: JSON.stringify({}),
      label: "Metadata",
    },
    requiresConfirmation: {
      type: "boolean",
      value: false,
      label: "Requires Confirmation",
    },
    requiresConfirmationWillBlockSlot: {
      type: "boolean",
      value: false,
      label: "Requires Confirmation Will Block Slot",
    },
    seatsEnabled: {
      type: "boolean",
      value: false,
      label: "Seats Enabled",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({}),
      label: "Event Type",
    },
  });

  const methods = useForm({
    defaultValues: {
      requiresConfirmation: state.requiresConfirmation.value,
      requiresConfirmationWillBlockSlot: state.requiresConfirmationWillBlockSlot.value,
      metadata: JSON.parse(state.metadata.value),
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        metadata={JSON.parse(state.metadata.value)}
        requiresConfirmation={state.requiresConfirmation.value}
        requiresConfirmationWillBlockSlot={state.requiresConfirmationWillBlockSlot.value}
        onRequiresConfirmation={(value) => setState('requiresConfirmation', value)}
        seatsEnabled={state.seatsEnabled.value}
        eventType={JSON.parse(state.eventType.value)}
      />
    </FormProvider>
  );
}