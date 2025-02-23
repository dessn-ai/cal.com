import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeDial } from '../../../../packages/features/timezone-buddy/components/TimeDial';
import { TBContext } from '../../../../packages/features/timezone-buddy/store';
import dayjs from '@calcom/dayjs';
import type { Dayjs } from '@calcom/dayjs';

interface StoreState {
  browsingDate: Dayjs;
  emitCellPosition: (position: number) => void;
}

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

  // Create a stable state object that won't change between renders
  const stableState = React.useRef<StoreState>({
    browsingDate: dayjs(),
    emitCellPosition: () => {},
  });

  // Create a stable store with proper Zustand implementation
  const store = React.useMemo(() => {
    let listeners: Set<() => void> = new Set();

    return {
      getState: () => stableState.current,
      setState: (partial: Partial<StoreState>, replace?: boolean) => {
        const nextState = replace 
          ? partial as StoreState
          : { ...stableState.current, ...partial };
        stableState.current = nextState;
        listeners.forEach(listener => listener());
      },
      subscribe: (listener: () => void) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      destroy: () => {
        listeners.clear();
      },
    };
  }, []);

  return (
    <TBContext.Provider value={store}>
      <TimeDial 
        timezone={state.timezone.value}
        dateRanges={parsedDateRanges}
      />
    </TBContext.Provider>
  );
}