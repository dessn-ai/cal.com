import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowDetailsPage';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    workflowId: {
      type: "number",
      value: 1,
      label: "Workflow ID",
    },
    selectedOptions: {
      type: "string",
      value: JSON.stringify([{ value: "1", label: "Option 1" }]),
      label: "Selected Options",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  const form = useForm<any>({
    defaultValues: {
      name: "Sample Workflow",
      activeOn: [],
      steps: [],
      trigger: "BEFORE_EVENT",
      time: 24,
      timeUnit: "hour",
      selectAll: false,
    },
  });

  const user = {
    id: 1,
    username: "sampleuser",
    email: "sample@example.com",
    name: "Sample User",
  };

  const allOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return (
    <FormProvider {...form}>
      <ImportedComponent
        form={form}
        workflowId={state.workflowId.value}
        selectedOptions={JSON.parse(state.selectedOptions.value)}
        setSelectedOptions={() => {}}
        teamId={state.teamId.value}
        user={user}
        readOnly={state.readOnly.value}
        isOrg={state.isOrg.value}
        allOptions={allOptions}
      />
    </FormProvider>
  );
}