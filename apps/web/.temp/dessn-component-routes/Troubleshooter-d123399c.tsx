import React from 'react';
import { useParentState } from '../useIframeState';
import { Troubleshooter } from '../../../../packages/features/troubleshooter/Troubleshooter';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    month: {
      type: "string",
      value: new Date().toISOString().slice(0, 7),
      label: "Month (YYYY-MM)",
    },
    selectedDate: {
      type: "string",
      value: new Date().toISOString().slice(0, 10),
      label: "Selected Date",
    },
  });

  return (
    <Troubleshooter
      month={state.month.value}
      selectedDate={state.selectedDate.value ? new Date(state.selectedDate.value) : undefined}
    />
  );
}