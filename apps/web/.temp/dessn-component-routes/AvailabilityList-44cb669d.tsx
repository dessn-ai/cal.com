import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/availability-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedules: {
      type: "string",
      value: JSON.stringify([
        {
          isDefault: true,
          name: "Default Schedule",
          id: 1,
          timeZone: "America/New_York",
          availability: [
            {
              id: 1,
              date: new Date().toISOString(),
              startTime: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(),
              endTime: new Date(new Date().setHours(17, 0, 0, 0)).toISOString(),
              userId: 1,
              eventTypeId: 1,
              scheduleId: 1,
              days: [1, 2, 3, 4, 5],
            },
          ],
        },
      ]),
      label: "Schedules",
    },
  });

  const parsedSchedules = JSON.parse(state.schedules.value);

  return <ImportedComponent schedules={parsedSchedules} />;
}