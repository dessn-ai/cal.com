import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeDial } from '../../../../packages/features/timezone-buddy/components/TimeDial';

import { TBContext } from '../../../../packages/features/timezone-buddy/store';
import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timezone: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
    dateRanges: {
      type: "string",
      value: JSON.stringify([
        {
          start: dayjs().startOf('day').add(9, 'hour').toISOString(),
          end: dayjs().startOf('day').add(17, 'hour').toISOString(),
        },
      ]),
      label: "Date Ranges",
    },
  });

  const parsedDateRanges = React.useMemo(() => {
    try {
      return JSON.parse(state.dateRanges.value).map((range) => ({
        start: dayjs(range.start),
        end: dayjs(range.end),
      }));
    } catch (e) {
      console.error("Failed to parse date ranges", e);
      return undefined;
    }
  }, [state.dateRanges.value]);

  const mockStore = React.useMemo(() => {
    return {
      getState: () => ({
        browsingDate: dayjs(),
        emitCellPosition: () => {},
      }),
      subscribe: () => () => {},
    };
  }, []);

  return (
    <TBContext.Provider value={mockStore}>
      <TimeDial 
        timezone={state.timezone.value}
        dateRanges={parsedDateRanges}
      />
    </TBContext.Provider>
  );
}