import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { CurrentTime } from '../../../../packages/features/calendars/weeklyview/components/currentTime/index';

// Create a mock context for BookerTime
const BookerTimeContext = createContext({
  timezone: 'UTC',
  timeFormat: 'h:mm A',
  timezoneFromBookerStore: 'UTC',
  timezoneFromTimePreferences: 'UTC',
});

// Create a mock context for CalendarStore
const CalendarStoreContext = createContext({
  view: 'week',
  startDate: new Date(),
  endDate: new Date(),
  events: [],
  startHour: 0,
  endHour: 23,
  gridCellsPerHour: 4,
  setView: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  setEvents: () => {},
  initState: () => {},
  setSelectedEvent: () => {},
  handleDateChange: () => {},
});

// Create a mock provider component for BookerTime
const MockBookerTimeProvider = ({ children }) => {
  return (
    <BookerTimeContext.Provider
      value={{
        timezone: 'UTC',
        timeFormat: 'h:mm A',
        timezoneFromBookerStore: 'UTC',
        timezoneFromTimePreferences: 'UTC',
      }}
    >
      {children}
    </BookerTimeContext.Provider>
  );
};

// Create a mock provider component for CalendarStore
const MockCalendarStoreProvider = ({ children }) => {
  return (
    <CalendarStoreContext.Provider
      value={{
        view: 'week',
        startDate: new Date(),
        endDate: new Date(),
        events: [],
        startHour: 0,
        endHour: 23,
        gridCellsPerHour: 4,
        setView: () => {},
        setStartDate: () => {},
        setEndDate: () => {},
        setEvents: () => {},
        initState: () => {},
        setSelectedEvent: () => {},
        handleDateChange: () => {},
      }}
    >
      {children}
    </CalendarStoreContext.Provider>
  );
};

// Export the hooks to prevent any potential hook usage errors
export const useBookerTime = () => useContext(BookerTimeContext);
export const useCalendarStore = () => useContext(CalendarStoreContext);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startHour: {
      type: "number",
      value: 0,
      label: "Start Hour",
    },
    endHour: {
      type: "number",
      value: 23,
      label: "End Hour",
    },
    timezone: {
      type: "string",
      value: "UTC",
      label: "Timezone",
    },
    timeFormat: {
      type: "string",
      value: "h:mm A",
      label: "Time Format",
    },
  });

  return (
    <MockCalendarStoreProvider>
      <MockBookerTimeProvider>
        <CurrentTime />
      </MockBookerTimeProvider>
    </MockCalendarStoreProvider>
  );
}