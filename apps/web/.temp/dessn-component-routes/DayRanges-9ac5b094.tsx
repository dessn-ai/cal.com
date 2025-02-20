import React from 'react';
import { useParentState } from '../useIframeState';
import { DayRanges } from '../../../../packages/features/schedules/components/Schedule';
import { useForm, useController, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "monday",
      label: "Name",
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
      [state.name.value]: [{ start: new Date(), end: new Date() }],
    },
    mode: "onSubmit",
  });

  const { control, getValues, formState } = methods;

  // Wrap the component in a try-catch to handle any form context errors
  try {
    return (
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <DayRanges
            name={state.name.value}
            disabled={state.disabled.value}
            userTimeFormat={state.userTimeFormat.value}
            control={control}
          />
        </form>
      </FormProvider>
    );
  } catch (error) {
    console.error('Form rendering error:', error);
    return <div>Error rendering form component</div>;
  }
}