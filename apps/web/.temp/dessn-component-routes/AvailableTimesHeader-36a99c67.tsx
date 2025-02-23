import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableTimesHeader } from '../../../../packages/features/bookings/components/AvailableTimesHeader';

import dayjs from 'dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    date: {
      type: "string",
      value: dayjs().toISOString(),
      label: "Date",
    },
    showTimeFormatToggle: {
      type: "boolean",
      value: true,
      label: "Show Time Format Toggle",
    },
    availableMonth: {
      type: "string",
      value: "January",
      label: "Available Month",
    },
    customClassNames: {
      type: "string",
      value: JSON.stringify({
        availableTimeSlotsHeaderContainer: "custom-container",
        availableTimeSlotsTitle: "custom-title",
        availableTimeSlotsTimeFormatToggle: "custom-toggle"
      }),
      label: "Custom Class Names",
    },
  });

  const customClassNames = JSON.parse(state.customClassNames.value);

  return (
    <AvailableTimesHeader
      date={dayjs(state.date.value)}
      showTimeFormatToggle={state.showTimeFormatToggle.value}
      availableMonth={state.availableMonth.value}
      customClassNames={customClassNames}
    />
  );
}