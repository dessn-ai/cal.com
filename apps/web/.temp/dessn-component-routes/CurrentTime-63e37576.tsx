import React from 'react';
import { useParentState } from '../useIframeState';
import { CurrentTime } from '../../../../packages/features/calendars/weeklyview/components/currentTime/index';

// Mock for useBookerTime
export const useBookerTime = () => ({
  timezone: "UTC",
  timeFormat: "h:mm A",
  timezoneFromBookerStore: "UTC",
  timezoneFromTimePreferences: "UTC"
});

// Mock for useCalendarStore
export const useCalendarStore = (selector: any) => ({
  startHour: 0,
  endHour: 23,
  gridCellsPerHour: 4,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startHour: {
      type: "number",
      value: 0,
      label: "Start Hour",
    },
    endHour: {
      type: "number",
      value: 23,
      label: "End Hour",
    },
    timezone: {
      type: "string",
      value: "UTC",
      label: "Timezone",
    },
    timeFormat: {
      type: "string",
      value: "h:mm A",
      label: "Time Format",
    },
  });

  return (
    <div>
      <CurrentTime />
    </div>
  );
}