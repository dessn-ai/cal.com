import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/workflow';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    workflow: {
      type: "number",
      value: 1,
      label: "Workflow ID",
    },
    workflowData: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Workflow",
        steps: [],
        trigger: "BEFORE_EVENT",
        time: 24,
        timeUnit: "hour",
        activeOn: [],
        isActiveOnAll: false,
      }),
      label: "Workflow Data",
    },
    verifiedNumbers: {
      type: "string",
      value: JSON.stringify([{ phoneNumber: "+1234567890" }]),
      label: "Verified Numbers",
    },
    verifiedEmails: {
      type: "string",
      value: JSON.stringify(["test@example.com"]),
      label: "Verified Emails",
    },
  });

  const parsedWorkflowData = state.workflowData.value ? JSON.parse(state.workflowData.value) : undefined;
  const parsedVerifiedNumbers = state.verifiedNumbers.value ? JSON.parse(state.verifiedNumbers.value) : undefined;
  const parsedVerifiedEmails = state.verifiedEmails.value ? JSON.parse(state.verifiedEmails.value) : undefined;

  return (
    <ImportedComponent
      workflow={state.workflow.value}
      workflowData={parsedWorkflowData}
      verifiedNumbers={parsedVerifiedNumbers}
      verifiedEmails={parsedVerifiedEmails}
    />
  );
}