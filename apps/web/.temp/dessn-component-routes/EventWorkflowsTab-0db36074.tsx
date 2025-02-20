import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/workflows/EventWorkfowsTab';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        requiresConfirmation: false,
        team: {
          id: 1,
          name: "Sample Team",
          members: [],
          slug: "sample-team",
        },
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
          activeOn: [{ eventType: { id: 1, title: "Sample Event" } }],
          isOrg: false,
          steps: [
            {
              action: "EMAIL_HOST",
              sendTo: null,
              template: "REMINDER",
              reminderBody: null,
              emailSubject: null,
              id: 1,
              sender: null,
              includeCalendarEvent: true,
              numberVerificationPending: false,
              numberRequired: false,
            },
          ],
          readOnly: false,
        },
      ],
      label: "Workflows",
    },
  });

  const methods = useForm<any>({
    defaultValues: {
      workflows: state.workflows.value,
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        eventType={state.eventType.value}
        workflows={state.workflows.value}
      />
    </FormProvider>
  );
}