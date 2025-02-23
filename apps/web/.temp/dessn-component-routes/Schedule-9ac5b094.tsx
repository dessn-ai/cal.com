import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/schedules/components/Schedule';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "schedule",
      label: "Name",
    },
    weekStart: {
      type: "number",
      value: 0,
      label: "Week Start",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    userTimeFormat: {
      type: "number",
      value: 12,
      label: "User Time Format",
    },
  });

  const methods = useForm({
    defaultValues: {
      [state.name.value]: [[], [], [], [], [], [], []],
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        name={state.name.value}
        control={methods.control}
        weekStart={state.weekStart.value}
        disabled={state.disabled.value}
        userTimeFormat={state.userTimeFormat.value}
      />
    </FormProvider>
  );
}