import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/workflows/EventWorkfowsTab';


export default function ComponentPreview() {
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
    <ImportedComponent
      eventType={state.eventType.value}
      workflows={state.workflows.value}
    />
  );
}