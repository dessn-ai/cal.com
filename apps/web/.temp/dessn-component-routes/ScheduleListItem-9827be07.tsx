import React from 'react';
import { useParentState } from '../useIframeState';
import { ScheduleListItem } from '../../../../packages/features/schedules/components/ScheduleListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedule: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Default Schedule",
        isDefault: true,
        availability: [
          {
            days: [1, 2, 3, 4, 5],
            startTime: "09:00:00",
            endTime: "17:00:00",
          },
        ],
        timeZone: "America/New_York",
      }),
      label: "Schedule",
    },
    isDeletable: {
      type: "boolean",
      value: true,
      label: "Is Deletable",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    hour12: {
      type: "boolean",
      value: true,
      label: "12-hour Format",
    },
    weekStart: {
      type: "string",
      value: "Sunday",
      label: "Week Start",
    },
  });

  const schedule = JSON.parse(state.schedule.value);

  const deleteFunction = ({ scheduleId }: { scheduleId: number }) => {
    console.log(`Delete schedule with id: ${scheduleId}`);
  };

  const updateDefault = ({ scheduleId, isDefault }: { scheduleId: number; isDefault: boolean }) => {
    console.log(`Update default for schedule ${scheduleId}: ${isDefault}`);
  };

  const duplicateFunction = ({ scheduleId }: { scheduleId: number }) => {
    console.log(`Duplicate schedule with id: ${scheduleId}`);
  };

  return (
    <ScheduleListItem
      schedule={schedule}
      deleteFunction={deleteFunction}
      displayOptions={{
        timeZone: state.timeZone.value,
        hour12: state.hour12.value,
        weekStart: state.weekStart.value,
      }}
      isDeletable={state.isDeletable.value}
      updateDefault={updateDefault}
      duplicateFunction={duplicateFunction}
    />
  );
}