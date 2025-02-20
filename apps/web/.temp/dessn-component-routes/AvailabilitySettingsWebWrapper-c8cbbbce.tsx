import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettingsWebWrapper } from '../../modules/availability/[schedule]/schedule-view';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Mock generateNonce function
const generateMockNonce = () => {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Helper function to create a Date object for a time string
const createTimeDate = (timeStr: string) => {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
};

// Mock the trpc context that will be available through the provider
const mockTrpc = {
  viewer: {
    availability: {
      schedule: {
        get: {
          useQuery: () => ({
            data: undefined,
            isPending: false
          })
        },
        update: {
          useMutation: () => ({
            mutate: async () => {},
            isPending: false
          })
        },
        delete: {
          useMutation: () => ({
            mutate: async () => {},
            isPending: false
          })
        },
        bulkUpdateToDefaultAvailability: {
          useMutation: () => ({
            mutate: async () => {},
            isPending: false
          })
        }
      }
    },
    getTravelSchedules: {
      useQuery: () => ({
        data: [],
        isPending: false
      })
    },
    getUsersDefaultConferencingApp: {
      invalidate: () => Promise.resolve()
    },
    eventTypes: {
      bulkEventFetch: {
        useQuery: () => ({
          data: { eventTypes: [] },
          isFetching: false
        })
      }
    }
  },
  useUtils: () => ({
    viewer: {
      availability: {
        list: {
          invalidate: () => Promise.resolve()
        },
        schedule: {
          get: {
            invalidate: () => Promise.resolve(),
            refetch: () => Promise.resolve()
          }
        }
      },
      getUsersDefaultConferencingApp: {
        invalidate: () => Promise.resolve()
      }
    }
  })
};

// Create a context to provide mock TRPC
const TRPCContext = React.createContext(mockTrpc);

// Mock next/navigation
const mockRouter = {
  push: () => Promise.resolve(),
  refresh: () => {},
  back: () => {},
  forward: () => {}
};

// Create context for router
const RouterContext = React.createContext({ router: mockRouter });

// Mock useLocale hook
const LocaleContext = React.createContext({
  t: (key: string) => key,
  i18n: {
    language: 'en',
    changeLanguage: () => Promise.resolve(),
  },
});

// Mock useMeQuery
const UserContext = React.createContext({
  data: {
    defaultScheduleId: 1,
    timeFormat: 12,
    weekStart: 'Sunday',
  },
});

// Mock private API utils context
const PrivateAPIContext = React.createContext({
  generateNonce: generateMockNonce,
});

export default function ComponentPreview() {
  const scheduleData = {
    id: 1,
    name: "Default Schedule",
    timeZone: "America/New_York",
    availability: [
      {
        id: 1,
        userId: 1,
        eventTypeId: null,
        days: [0, 1, 2, 3, 4],
        startTime: createTimeDate("09:00:00"),
        endTime: createTimeDate("17:00:00"),
        date: null
      }
    ],
    schedule: [
      {
        id: 1,
        userId: 1,
        eventTypeId: null,
        days: [0, 1, 2, 3, 4],
        startTime: createTimeDate("09:00:00"),
        endTime: createTimeDate("17:00:00"),
        date: null
      }
    ],
    dateOverrides: [],
    timeZone: "America/New_York",
    isDefault: true,
    scheduleId: 1,
    userId: 1,
    workingHours: [
      {
        id: 1,
        userId: 1,
        eventTypeId: null,
        days: [0, 1, 2, 3, 4],
        startTime: createTimeDate("09:00:00"),
        endTime: createTimeDate("17:00:00"),
        date: null
      }
    ]
  };

  const [state, setState] = useParentState({
    scheduleFetched: {
      type: "string",
      value: JSON.stringify(scheduleData, (key, value) => {
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
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
        },
      ]),
      label: "Travel Schedules",
    },
  });

  const parsedScheduleFetched = state.scheduleFetched.value ? JSON.parse(state.scheduleFetched.value, (key, value) => {
    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
      return new Date(value);
    }
    return value;
  }) : undefined;
  
  const parsedTravelSchedules = state.travelSchedules.value ? JSON.parse(state.travelSchedules.value) : [];

  return (
    <PrivateAPIContext.Provider value={{ generateNonce: generateMockNonce }}>
      <UserContext.Provider value={{ data: { defaultScheduleId: 1, timeFormat: 12, weekStart: 'Sunday' } }}>
        <LocaleContext.Provider value={{ t: (key: string) => key, i18n: { language: 'en', changeLanguage: () => Promise.resolve() } }}>
          <RouterContext.Provider value={{ router: mockRouter }}>
            <QueryClientProvider client={queryClient}>
              <TRPCContext.Provider value={mockTrpc}>
                <AvailabilitySettingsWebWrapper
                  scheduleFetched={parsedScheduleFetched}
                  travelSchedules={parsedTravelSchedules}
                />
              </TRPCContext.Provider>
            </QueryClientProvider>
          </RouterContext.Provider>
        </LocaleContext.Provider>
      </UserContext.Provider>
    </PrivateAPIContext.Provider>
  );
}