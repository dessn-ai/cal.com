import React from 'react';
import { useParentState } from '../useIframeState';
import { DayRanges } from '../../../../packages/features/schedules/components/Schedule';

import { useForm, useController } from 'react-hook-form';

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

  const { control } = useForm({
    defaultValues: {
      [state.name.value]: [{ start: new Date(), end: new Date() }],
    },
  });

  const { field } = useController({
    name: state.name.value,
    control,
  });

  return (
    <DayRanges
      name={state.name.value}
      disabled={state.disabled.value}
      userTimeFormat={state.userTimeFormat.value}
      control={control}
    />
  );
}