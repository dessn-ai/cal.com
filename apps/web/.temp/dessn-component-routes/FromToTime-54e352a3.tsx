import React from 'react';
import { useParentState } from '../useIframeState';
import { FromToTime } from '../../../../packages/features/bookings/Booker/utils/dates';

import { TimeFormat } from "@calcom/lib/timeFormat";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    date: {
      type: "string",
      value: new Date().toISOString(),
      label: "Date",
    },
    duration: {
      type: "number",
      value: 60,
      label: "Duration (minutes)",
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: "Time Format",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    language: {
      type: "string",
      value: "en-US",
      label: "Language",
    },
  });

  return (
    <FromToTime
      date={state.date.value}
      duration={state.duration.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      timeZone={state.timeZone.value}
      language={state.language.value}
    />
  );
}