import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/workflows/EventWorkfowsTab';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const formMethods = useForm({
    defaultValues: {
      workflows: [],
    }
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        requiresConfirmation: false,
        team: { id: 1 },
        userId: 1,
      },
      label: "Event Type",
    },
    workflows: {
      type: "object",
      value: [
        {
          id: 1,
          name: "Sample Workflow",
          activeOn: [{ eventType: { id: 1 } }],
          isOrg: false,
          steps: [{ action: "EMAIL_HOST" }],
          readOnly: false,
        },
      ],
      label: "Workflows",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <ImportedComponent
        eventType={state.eventType.value}
        workflows={state.workflows.value}
      />
    </FormProvider>
  );
}