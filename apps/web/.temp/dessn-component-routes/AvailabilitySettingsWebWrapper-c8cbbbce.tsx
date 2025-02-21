import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettingsWebWrapper } from '../../modules/availability/[schedule]/schedule-view';

// Mock Providers
const MockTroubleshooterProvider = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="mock-troubleshooter-provider">{children}</div>;
};

// Simple mock provider that just renders children
const MockJotaiProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Create a mock store context
const MockStoreContext = React.createContext<any>({
  get: () => [],
  set: () => {},
  subscribe: () => () => {},
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scheduleFetched: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Default Schedule",
        timeZone: "America/New_York",
        availability: [
          {
            id: 1,
            userId: 1,
            days: [0, 1, 2, 3, 4],
            startTime: "09:00:00",
            endTime: "17:00:00",
            date: null,
            scheduleId: 1,
          }
        ],
        schedules: [], // Add empty schedules array
        schedule: {
          id: 1,
          userId: 1,
          name: "Working Hours",
          timeZone: "America/New_York",
          availability: [
            {
              id: 1,
              userId: 1,
              days: [0, 1, 2, 3, 4],
              startTime: "09:00:00",
              endTime: "17:00:00",
              scheduleId: 1,
            }
          ],
          schedules: [], // Add empty schedules array
          workingHours: [
            {
              id: 1,
              userId: 1,
              days: [0, 1, 2, 3, 4],
              startTime: "09:00:00",
              endTime: "17:00:00",
              scheduleId: 1,
            }
          ],
        },
        timeZone: "America/New_York",
        isDefault: true,
        scheduleId: 1,
        userId: 1,
        user: {
          id: 1,
          username: "testuser",
          timeZone: "America/New_York",
          weekStart: "Monday",
          schedules: [
            {
              id: 1,
              name: "Working Hours",
              timeZone: "America/New_York",
              availability: [], // Add availability array
              workingHours: [], // Add workingHours array
            }
          ],
          availability: [], // Add availability array
          workingHours: [], // Add workingHours array
        },
        workingHours: [
          {
            id: 1,
            userId: 1,
            days: [0, 1, 2, 3, 4],
            startTime: "09:00:00",
            endTime: "17:00:00",
            scheduleId: 1,
          }
        ],
        selectedDates: [], // Add selectedDates array
        dateOverrides: [], // Add dateOverrides array
        slots: [], // Add slots array
        currentSchedule: {
          id: 1,
          name: "Working Hours",
          timeZone: "America/New_York",
          availability: [],
          workingHours: [],
          schedules: [],
        },
      }),
      label: "Schedule Fetched",
    },
    travelSchedules: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Business Trip",
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          userId: 1,
          scheduleId: 1,
          timeZone: "America/New_York",
          availability: [], // Add availability array
          workingHours: [], // Add workingHours array
        },
      ]),
      label: "Travel Schedules",
    },
  });

  const parsedScheduleFetched = state.scheduleFetched.value ? JSON.parse(state.scheduleFetched.value) : {
    schedules: [],
    availability: [],
    workingHours: [],
    schedule: {
      schedules: [],
      availability: [],
      workingHours: [],
    },
  };
  
  const parsedTravelSchedules = state.travelSchedules.value ? JSON.parse(state.travelSchedules.value) : [];

  return (
    <React.Suspense fallback="Loading...">
      <MockStoreContext.Provider value={{
        get: () => ({
          schedules: [],
          availability: [],
          workingHours: [],
          selectedDates: [],
          dateOverrides: [],
          slots: [],
        }),
      }}>
        <MockJotaiProvider>
          <MockTroubleshooterProvider>
            <AvailabilitySettingsWebWrapper
              scheduleFetched={parsedScheduleFetched}
              travelSchedules={parsedTravelSchedules}
            />
          </MockTroubleshooterProvider>
        </MockJotaiProvider>
      </MockStoreContext.Provider>
    </React.Suspense>
  );
}