import React from 'react';
import { useParentState } from '../useIframeState';
import { HavingTroubleFindingTime } from '../../../../packages/features/bookings/Booker/components/HavingTroubleFindingTime';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onButtonClick: {
      type: "string",
      value: "() => console.log('Button clicked')",
      label: "Button Click Handler",
    },
    dayCount: {
      type: "number",
      value: 7,
      label: "Day Count",
    },
    visible: {
      type: "boolean",
      value: true,
      label: "Visible",
    },
    isScheduleLoading: {
      type: "boolean",
      value: false,
      label: "Is Schedule Loading",
    },
  });

  return (
    <HavingTroubleFindingTime
      onButtonClick={() => eval(state.onButtonClick.value)}
      dayCount={state.dayCount.value}
      visible={state.visible.value}
      isScheduleLoading={state.isScheduleLoading.value}
    />
  );
}