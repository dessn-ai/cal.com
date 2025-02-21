import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/availability-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedules: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Default Schedule",
          timeZone: "America/New_York",
          availability: [
            { days: [1, 2, 3, 4, 5], startTime: "09:00:00", endTime: "17:00:00" }
          ]
        }
      ]),
      label: "Schedules"
    }
  });

  const schedules = JSON.parse(state.schedules.value);

  return <ImportedComponent schedules={schedules} />;
}