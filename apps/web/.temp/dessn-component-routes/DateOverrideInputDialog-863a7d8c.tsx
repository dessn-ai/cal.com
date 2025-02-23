import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/schedules/components/DateOverrideInputDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    workingHours: {
      type: "string",
      value: JSON.stringify([
        {
          days: [1, 2, 3, 4, 5],
          startTime: 540,
          endTime: 1020,
        },
      ]),
      label: "Working Hours",
    },
    excludedDates: {
      type: "string",
      value: JSON.stringify(["2023-07-04", "2023-12-25"]),
      label: "Excluded Dates",
    },
    userTimeFormat: {
      type: "number",
      value: 12,
      label: "User Time Format",
    },
    weekStart: {
      type: "number",
      value: 0,
      label: "Week Start",
    },
  });

  const workingHours = JSON.parse(state.workingHours.value);
  const excludedDates = JSON.parse(state.excludedDates.value);

  return (
    <ImportedComponent
      workingHours={workingHours}
      excludedDates={excludedDates}
      Trigger={<button>Open Date Override Dialog</button>}
      onChange={(newValue) => console.log("Date override changed:", newValue)}
      userTimeFormat={state.userTimeFormat.value}
      weekStart={state.weekStart.value as 0 | 1 | 2 | 3 | 4 | 5 | 6}
    />
  );
}