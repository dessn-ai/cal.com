import React from 'react';
import { useParentState } from '../useIframeState';
import { VerticalLines } from '../../../../packages/features/calendars/weeklyview/components/verticalLines/index';

import dayjs from 'dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    numberOfDays: {
      type: "number",
      value: 7,
      label: "Number of Days",
    },
  });

  const days = Array.from({ length: state.numberOfDays.value }, (_, i) => 
    dayjs().add(i, 'day')
  );

  return <VerticalLines days={days} />;
}