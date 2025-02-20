import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeFormatToggle } from '../../../../packages/features/bookings/components/TimeFormatToggle';
import { TimeFormat } from '@calcom/lib/timeFormat';
import { useTimePreferences } from '../../../../packages/features/bookings/lib';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Create mock contexts
const TimePreferencesContext = React.createContext({
  timeFormat: TimeFormat.TWELVE_HOUR,
  setTimeFormat: () => {},
});

const LocaleContext = React.createContext({
  t: (key: string) => key,
});

// Create provider wrapper
const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocaleContext.Provider value={{ t: (key: string) => key }}>
      <TimePreferencesContext.Provider 
        value={{
          timeFormat: TimeFormat.TWELVE_HOUR,
          setTimeFormat: () => {},
        }}
      >
        {children}
      </TimePreferencesContext.Provider>
    </LocaleContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    customClassName: {
      type: "string",
      value: "custom-class",
      label: "Custom Class Name",
    },
  });

  return (
    <MockProviders>
      <TimeFormatToggle customClassName={state.customClassName.value} />
    </MockProviders>
  );
}