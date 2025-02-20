import React from 'react';
import { useParentState } from '../useIframeState';
import { EventList } from '../../../../packages/features/calendars/weeklyview/components/event/EventList';

import dayjs from 'dayjs';
import { useCalendarStore } from '../../../../packages/features/calendars/weeklyview/state/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    day: {
      type: "string",
      value: dayjs().format('YYYY-MM-DD'),
      label: "Day",
    },
  });

  // Mock the useCalendarStore
  React.useEffect(() => {
    useCalendarStore.setState({
      startHour: 9,
      events: [
        {
          id: '1',
          start: dayjs(state.day.value).hour(10).toDate(),
          end: dayjs(state.day.value).hour(11).toDate(),
          title: 'Sample Event 1',
        },
        {
          id: '2',
          start: dayjs(state.day.value).hour(14).toDate(),
          end: dayjs(state.day.value).hour(15).toDate(),
          title: 'Sample Event 2',
        },
      ],
      onEventClick: (event) => console.log('Event clicked:', event),
    });
  }, [state.day.value]);

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <EventList day={dayjs(state.day.value)} />
    </div>
  );
}