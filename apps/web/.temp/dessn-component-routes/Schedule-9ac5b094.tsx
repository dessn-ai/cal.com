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
      [state.name.value]: [
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }],
        [{ start: new Date(), end: new Date() }]
      ],
    },
    mode: "onChange"
  });

  // Ensure the form is properly initialized before rendering
  if (!methods || !methods.control) {
    return null;
  }

  return (
    <div className="p-4">
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <ImportedComponent
            name={state.name.value}
            control={methods.control}
            weekStart={state.weekStart.value}
            disabled={state.disabled.value}
            userTimeFormat={state.userTimeFormat.value}
          />
        </form>
      </FormProvider>
    </div>
  );
}