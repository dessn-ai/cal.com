import React from 'react';
import { useParentState } from '../useIframeState';
import { SchedulerColumns } from '../../../../packages/features/calendars/weeklyview/components/grid/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    offsetHeight: {
      type: "number",
      value: 50,
      label: "Offset Height",
    },
    gridStopsPerDay: {
      type: "number",
      value: 24,
      label: "Grid Stops Per Day",
    },
    zIndex: {
      type: "number",
      value: 1,
      label: "Z-Index",
    },
  });

  return (
    <SchedulerColumns
      offsetHeight={state.offsetHeight.value}
      gridStopsPerDay={state.gridStopsPerDay.value}
      zIndex={state.zIndex.value}
    >
      <li>Sample child element</li>
      <li>Another sample child element</li>
    </SchedulerColumns>
  );
}