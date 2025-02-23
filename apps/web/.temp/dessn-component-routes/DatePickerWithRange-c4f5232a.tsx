import React from 'react';
import { useParentState } from '../useIframeState';
import { DatePickerWithRange } from '../../../../packages/ui/components/form/date-range-picker/DateRangePicker';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    dates: {
      type: "object",
      value: { startDate: new Date().toISOString(), endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() },
      label: "Date Range",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    minDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Min Date",
    },
    maxDate: {
      type: "string",
      value: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      label: "Max Date",
    },
    withoutPopover: {
      type: "boolean",
      value: false,
      label: "Without Popover",
    },
  });

  const handleDatesChange = ({ startDate, endDate }) => {
    setState('dates', { startDate: startDate?.toISOString(), endDate: endDate?.toISOString() });
  };

  return (
    <DatePickerWithRange
      dates={{
        startDate: state.dates.value.startDate ? new Date(state.dates.value.startDate) : undefined,
        endDate: state.dates.value.endDate ? new Date(state.dates.value.endDate) : undefined,
      }}
      onDatesChange={handleDatesChange}
      disabled={state.disabled.value}
      minDate={new Date(state.minDate.value)}
      maxDate={new Date(state.maxDate.value)}
      withoutPopover={state.withoutPopover.value}
    />
  );
}