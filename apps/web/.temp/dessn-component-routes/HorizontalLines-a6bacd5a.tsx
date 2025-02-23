import React from 'react';
import { useParentState } from '../useIframeState';
import { HorizontalLines } from '../../../../packages/features/calendars/weeklyview/components/horizontalLines/index';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hours: {
      type: "string",
      value: JSON.stringify([dayjs(), dayjs().add(1, 'hour'), dayjs().add(2, 'hours')]),
      label: "Hours",
    },
    numberOfGridStopsPerCell: {
      type: "number",
      value: 4,
      label: "Number of Grid Stops Per Cell",
    },
  });

  const containerOffsetRef = React.useRef<HTMLDivElement>(null);

  return (
    <HorizontalLines
      hours={JSON.parse(state.hours.value).map((hour: string) => dayjs(hour))}
      numberOfGridStopsPerCell={state.numberOfGridStopsPerCell.value}
      containerOffsetRef={containerOffsetRef}
    />
  );
}