import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettingsWebWrapper } from '../../modules/availability/[schedule]/schedule-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scheduleFetched: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Default Schedule",
        timeZone: "America/New_York",
        availability: [],
      }),
      label: "Schedule Fetched",
    },
    travelSchedules: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Business Trip",
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ]),
      label: "Travel Schedules",
    },
  });

  const parsedScheduleFetched = state.scheduleFetched.value ? JSON.parse(state.scheduleFetched.value) : undefined;
  const parsedTravelSchedules = state.travelSchedules.value ? JSON.parse(state.travelSchedules.value) : undefined;

  return (
    <AvailabilitySettingsWebWrapper
      scheduleFetched={parsedScheduleFetched}
      travelSchedules={parsedTravelSchedules}
    />
  );
}