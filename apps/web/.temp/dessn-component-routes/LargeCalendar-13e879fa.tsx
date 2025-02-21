import React from 'react';
import { useParentState } from '../useIframeState';
import { LargeCalendar } from '../../../../packages/features/troubleshooter/components/LargeCalendar';
import { useTroubleshooterStore } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    extraDays: {
      type: "number",
      value: 7,
      label: "Extra Days",
    },
  });

  return (
    <LargeCalendar extraDays={state.extraDays.value} />
  );
}