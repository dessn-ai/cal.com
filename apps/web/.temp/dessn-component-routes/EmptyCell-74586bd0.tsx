import React from 'react';
import { useParentState } from '../useIframeState';
import { EmptyCell } from '../../../../packages/features/calendars/weeklyview/components/event/Empty';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    day: {
      type: "string",
      value: dayjs().format(),
      label: "Day",
    },
    gridCellIdx: {
      type: "number",
      value: 0,
      label: "Grid Cell Index",
    },
    totalGridCells: {
      type: "number",
      value: 24,
      label: "Total Grid Cells",
    },
    selectionLength: {
      type: "number",
      value: 1,
      label: "Selection Length",
    },
    startHour: {
      type: "number",
      value: 9,
      label: "Start Hour",
    },
    timezone: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled",
    },
    topOffsetMinutes: {
      type: "number",
      value: 0,
      label: "Top Offset Minutes",
    },
  });

  return (
    <div style={{ height: '100px', width: '100px' }}>
      <EmptyCell
        day={dayjs(state.day.value)}
        gridCellIdx={state.gridCellIdx.value}
        totalGridCells={state.totalGridCells.value}
        selectionLength={state.selectionLength.value}
        startHour={state.startHour.value}
        timezone={state.timezone.value}
        isDisabled={state.isDisabled.value}
        topOffsetMinutes={state.topOffsetMinutes.value}
      />
    </div>
  );
}