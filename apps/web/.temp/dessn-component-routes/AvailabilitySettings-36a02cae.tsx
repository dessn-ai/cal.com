import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettings } from '../../../../packages/platform/atoms/availability/AvailabilitySettings';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedule: {
      type: "object",
      value: {
        name: "Default Schedule",
        id: 1,
        availability: [[]],
        isLastSchedule: false,
        isDefault: true,
        workingHours: [],
        dateOverrides: [],
        timeZone: "America/New_York",
        schedule: []
      },
      label: "Schedule"
    },
    isDeleting: {
      type: "boolean",
      value: false,
      label: "Is Deleting"
    },
    isSaving: {
      type: "boolean",
      value: false,
      label: "Is Saving"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    },
    timeFormat: {
      type: "number",
      value: 12,
      label: "Time Format"
    },
    weekStart: {
      type: "string",
      value: "Sunday",
      label: "Week Start"
    },
    backPath: {
      type: "string",
      value: "/settings/availability",
      label: "Back Path"
    }
  });

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleSubmit = async (data) => {
    console.log("Form submitted", data);
  };

  return (
    <AvailabilitySettings
      schedule={state.schedule.value}
      handleDelete={handleDelete}
      isDeleting={state.isDeleting.value}
      isSaving={state.isSaving.value}
      isLoading={state.isLoading.value}
      timeFormat={state.timeFormat.value}
      weekStart={state.weekStart.value}
      backPath={state.backPath.value}
      handleSubmit={handleSubmit}
    />
  );
}