import React from 'react';
import { useParentState } from '../useIframeState';
import { NewScheduleButton } from '../../../../packages/features/schedules/components/NewScheduleButton';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "new-schedule",
      label: "Name",
    },
    fromEventType: {
      type: "boolean",
      value: false,
      label: "From Event Type",
    },
  });

  const form = useForm();

  return (
    <NewScheduleButton
      name={state.name.value}
      fromEventType={state.fromEventType.value}
    />
  );
}