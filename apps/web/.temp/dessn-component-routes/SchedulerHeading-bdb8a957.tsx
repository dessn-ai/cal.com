import React from 'react';
import { useParentState } from '../useIframeState';
import { SchedulerHeading } from '../../../../packages/features/calendars/weeklyview/components/heading/SchedulerHeading';
import { useCalendarStore } from '../../../../packages/features/calendars/weeklyview/state/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      label: "End Date",
    },
  });

  // Initialize the store with our mock data
  React.useEffect(() => {
    useCalendarStore.getState().initState({
      startDate: new Date(state.startDate.value),
      endDate: new Date(state.endDate.value),
      events: [],
      view: 'week',
      handleDateChange: (direction: 'INCREMENT' | 'DECREMENT') => {
        const change = direction === 'INCREMENT' ? 7 : -7;
        setState('startDate', new Date(new Date(state.startDate.value).getTime() + change * 24 * 60 * 60 * 1000).toISOString());
        setState('endDate', new Date(new Date(state.endDate.value).getTime() + change * 24 * 60 * 60 * 1000).toISOString());
      },
    });
  }, [state.startDate.value, state.endDate.value]);

  return <SchedulerHeading />;
}