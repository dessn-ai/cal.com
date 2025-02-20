import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/datepicker/DatePicker';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    date: {
      type: "string",
      value: new Date().toISOString(),
      label: "Date",
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
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  const handleDateChange = (newDate: Date) => {
    setState('date', newDate.toISOString());
  };

  return (
    <ImportedComponent
      date={new Date(state.date.value)}
      onDatesChange={handleDateChange}
      disabled={state.disabled.value}
      minDate={new Date(state.minDate.value)}
      className={state.className.value}
    />
  );
}