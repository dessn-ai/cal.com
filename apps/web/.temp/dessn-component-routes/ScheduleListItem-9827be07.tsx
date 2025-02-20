import React from 'react';
import { useParentState } from '../useIframeState';
import { ScheduleListItem } from '../../../../packages/features/schedules/components/ScheduleListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedule: {
      type: "dropdown",
      value: "Default Schedule",
      options: ["Default Schedule", "Work Schedule", "Personal Schedule"],
      label: "Schedule Name",
    },
    isDefault: {
      type: "boolean",
      value: true,
      label: "Is Default",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    isDeletable: {
      type: "boolean",
      value: true,
      label: "Is Deletable",
    },
  });

  const mockSchedule = {
    isDefault: state.isDefault.value,
    name: state.schedule.value,
    id: 1,
    timeZone: state.timeZone.value,
    availability: [
      {
        id: 1,
        date: null,
        startTime: new Date("2023-06-01T09:00:00"),
        endTime: new Date("2023-06-01T17:00:00"),
        userId: null,
        eventTypeId: null,
        scheduleId: null,
        days: [1, 2, 3, 4, 5],
      },
    ],
  };

  const mockDeleteFunction = ({ scheduleId }: { scheduleId: number }) => {
    console.log(`Delete schedule with id: ${scheduleId}`);
  };

  const mockUpdateDefault = ({ scheduleId, isDefault }: { scheduleId: number; isDefault: boolean }) => {
    console.log(`Update default for schedule ${scheduleId}: ${isDefault}`);
  };

  const mockDuplicateFunction = ({ scheduleId }: { scheduleId: number }) => {
    console.log(`Duplicate schedule with id: ${scheduleId}`);
  };

  return (
    <ScheduleListItem
      schedule={mockSchedule}
      deleteFunction={mockDeleteFunction}
      displayOptions={{
        timeZone: state.timeZone.value,
        hour12: true,
        weekStart: "Sunday",
      }}
      isDeletable={state.isDeletable.value}
      updateDefault={mockUpdateDefault}
      duplicateFunction={mockDuplicateFunction}
    />
  );
}