import React from 'react';
import { useParentState } from '../useIframeState';
import { DateValues } from '../../../../packages/features/calendars/weeklyview/components/DateValues/index';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    days: {
      type: "string",
      value: JSON.stringify([dayjs(), dayjs().add(1, 'day'), dayjs().add(2, 'day'), dayjs().add(3, 'day'), dayjs().add(4, 'day'), dayjs().add(5, 'day'), dayjs().add(6, 'day')]),
      label: "Days",
    },
  });

  const containerNavRef = React.useRef<HTMLDivElement>(null);

  return (
    <DateValues
      days={JSON.parse(state.days.value).map((day: string) => dayjs(day))}
      containerNavRef={containerNavRef}
    />
  );
}