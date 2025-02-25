import React from 'react';
import { useParentState } from '../useIframeState';
import { ScheduleDay } from '../../../../packages/features/schedules/components/Schedule';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "schedule.0",
      label: "Name",
    },
    weekday: {
      type: "string",
      value: "Monday",
      label: "Weekday",
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

  // Create initial date objects for start and end times
  const today = new Date();
  const startTime = new Date(today.setHours(9, 0, 0, 0)); // 9:00 AM
  const endTime = new Date(today.setHours(17, 0, 0, 0)); // 5:00 PM

  const methods = useForm({
    defaultValues: {
      schedule: {
        0: [{ start: startTime, end: endTime }],
      },
    },
  });

  return (
    <div className="p-4">
      <FormProvider {...methods}>
        <ScheduleDay
          name="schedule.0"
          weekday={state.weekday.value}
          control={methods.control}
          CopyButton={<div />}
          disabled={state.disabled.value}
          userTimeFormat={state.userTimeFormat.value}
        />
      </FormProvider>
    </div>
  );
}