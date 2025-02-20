import React from 'react';
import { useParentState } from '../useIframeState';
import { LargeCalendar } from '../../../../packages/features/bookings/Booker/components/LargeCalendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    extraDays: {
      type: "number",
      value: 7,
      label: "Extra Days",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    eventLength: {
      type: "number",
      value: 30,
      label: "Event Length (minutes)",
    },
  });

  // Use fixed dates to avoid any timezone or calculation issues
  const mockSchedule = {
    slots: {
      "2024-01-20": [
        {
          time: "2024-01-20T09:00:00.000Z",
          users: [],
          attendees: [],
        },
        {
          time: "2024-01-20T10:00:00.000Z",
          users: [],
          attendees: [],
        },
        {
          time: "2024-01-20T11:00:00.000Z",
          users: [],
          attendees: [],
        }
      ]
    }
  };

  // Mock event data with minimal required props
  const mockEvent = {
    data: {
      length: state.eventLength.value
    }
  };

  return (
    <div style={{ height: '600px' }}>
      <LargeCalendar
        extraDays={state.extraDays.value}
        schedule={mockSchedule}
        isLoading={state.isLoading.value}
        event={mockEvent}
      />
    </div>
  );
}