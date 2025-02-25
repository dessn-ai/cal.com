import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeDial } from '../../../../packages/features/timezone-buddy/components/TimeDial';
import { TBContext } from '../../../../packages/features/timezone-buddy/store';
import dayjs from '@calcom/dayjs';

// Create a proper store with all required methods
const createStore = () => {
  let state = {
    browsingDate: dayjs(),
    emitCellPosition: (position: number) => {},
  };
  
  const listeners = new Set();

  const store = {
    getState: () => state,
    setState: (partial) => {
      state = typeof partial === 'function' ? partial(state) : { ...state, ...partial };
      listeners.forEach((listener) => listener(state));
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    destroy: () => {
      listeners.clear();
    },
  };

  return store;
};

export default function ComponentPreview() {
  // Create store instance only once using useRef
  const storeRef = React.useRef(createStore());
  
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

  // Clean up store on unmount
  React.useEffect(() => {
    const currentStore = storeRef.current;
    return () => {
      currentStore.destroy();
    };
  }, []);

  return (
    <TBContext.Provider value={storeRef.current}>
      <TimeDial 
        timezone={state.timezone.value}
        dateRanges={parsedDateRanges}
      />
    </TBContext.Provider>
  );
}