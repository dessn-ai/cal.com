import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableCellsForDay } from '../../../../packages/features/calendars/weeklyview/components/event/Empty';

import dayjs from 'dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    availableSlots: {
      type: "string",
      value: JSON.stringify({
        "2023-06-01": [
          {
            start: new Date("2023-06-01T09:00:00").toISOString(),
            end: new Date("2023-06-01T10:00:00").toISOString(),
          },
          {
            start: new Date("2023-06-01T11:00:00").toISOString(),
            end: new Date("2023-06-01T12:00:00").toISOString(),
          },
        ],
      }),
      label: "Available Slots",
    },
    day: {
      type: "string",
      value: new Date().toISOString(),
      label: "Day",
    },
    startHour: {
      type: "number",
      value: 9,
      label: "Start Hour",
    },
  });

  const availableSlots = JSON.parse(state.availableSlots.value);
  const day = dayjs(state.day.value);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AvailableCellsForDay
        availableSlots={availableSlots}
        day={day}
        startHour={state.startHour.value}
      />
    </div>
  );
}