import React from 'react';
import { useParentState } from '../useIframeState';
import { Calendar } from '../../../../packages/ui/components/form/date-range-picker/Calendar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fromDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "From Date",
    },
    toDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      label: "To Date",
    },
    showOutsideDays: {
      type: "boolean",
      value: true,
      label: "Show Outside Days",
    },
  });

  return (
    <Calendar
      fromDate={new Date(state.fromDate.value)}
      toDate={new Date(state.toDate.value)}
      showOutsideDays={state.showOutsideDays.value}
    />
  );
}