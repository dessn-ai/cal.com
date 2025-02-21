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

  const mockSchedule = {
    slots: {
      [new Date().toISOString().split('T')[0]]: [
        { time: new Date().toISOString() },
        { time: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString() },
      ],
    },
  };

  return (
    <div style={{ height: '600px' }}>
      <LargeCalendar
        extraDays={state.extraDays.value}
        schedule={mockSchedule}
        isLoading={state.isLoading.value}
        event={{
          data: {
            length: state.eventLength.value,
          },
        }}
      />
    </div>
  );
}