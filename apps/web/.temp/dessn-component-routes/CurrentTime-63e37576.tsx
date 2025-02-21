import React from 'react';
import { useParentState } from '../useIframeState';
import { CurrentTime } from '../../../../packages/features/calendars/weeklyview/components/currentTime/index';

import { CalendarStoreProvider } from '../../../../packages/features/calendars/weeklyview/state/store';
import { BookerTimeProvider } from '../../../../packages/features/bookings/Booker/components/hooks/useBookerTime';

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
    <CalendarStoreProvider>
      <BookerTimeProvider>
        <CurrentTime />
      </BookerTimeProvider>
    </CalendarStoreProvider>
  );
}