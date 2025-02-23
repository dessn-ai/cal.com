import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/schedules/components/DateOverrideList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    workingHours: {
      type: 'string',
      value: JSON.stringify([
        { days: [1, 2, 3, 4, 5], startTime: 540, endTime: 1020, userId: 1 },
      ]),
      label: 'Working Hours',
    },
    excludedDates: {
      type: 'string',
      value: JSON.stringify(['2023-06-01', '2023-06-02']),
      label: 'Excluded Dates',
    },
    userTimeFormat: {
      type: 'number',
      value: 12,
      label: 'User Time Format',
    },
    hour12: {
      type: 'boolean',
      value: true,
      label: 'Use 12-hour Format',
    },
    weekStart: {
      type: 'number',
      value: 0,
      label: 'Week Start',
    },
  });

  const fields = [
    {
      ranges: [
        { start: new Date('2023-06-03T09:00:00Z'), end: new Date('2023-06-03T17:00:00Z') },
      ],
      id: '1',
    },
    {
      ranges: [
        { start: new Date('2023-06-04T10:00:00Z'), end: new Date('2023-06-04T18:00:00Z') },
      ],
      id: '2',
    },
  ];

  return (
    <ImportedComponent
      replace={() => {}}
      fields={fields}
      workingHours={JSON.parse(state.workingHours.value)}
      excludedDates={JSON.parse(state.excludedDates.value)}
      userTimeFormat={state.userTimeFormat.value}
      hour12={state.hour12.value}
      travelSchedules={[]}
      weekStart={state.weekStart.value as 0 | 1 | 2 | 3 | 4 | 5 | 6}
      handleAvailabilityUpdate={() => console.log('Availability updated')}
    />
  );
}