import React from 'react';
import { useParentState } from '../useIframeState';
import { Day } from '../../../../packages/features/calendars/DatePicker';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    active: {
      type: "boolean",
      value: false,
      label: "Active",
    },
    date: {
      type: "string",
      value: dayjs().format('YYYY-MM-DD'),
      label: "Date",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    away: {
      type: "boolean",
      value: false,
      label: "Away",
    },
    emoji: {
      type: "string",
      value: "🏖️",
      label: "Emoji",
    },
    customClassName: {
      type: "string",
      value: "",
      label: "Custom Class Name",
    },
  });

  return (
    <Day
      active={state.active.value}
      date={dayjs(state.date.value)}
      disabled={state.disabled.value}
      away={state.away.value}
      emoji={state.emoji.value}
      customClassName={{
        dayContainer: state.customClassName.value,
        dayActive: state.customClassName.value,
      }}
      onClick={() => console.log("Day clicked")}
    />
  );
}