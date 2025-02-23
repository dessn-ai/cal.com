import React from 'react';
import { useParentState } from '../useIframeState';
import { DestinationCalendarSettingsWebWrapper } from '../../../../packages/platform/atoms/destination-calendar/wrappers/DestinationCalendarSettingsWebWrapper';

// Create a mock implementation of trpc
const mockTrpcImplementation = {
  viewer: {
    connectedCalendars: {
      useQuery: () => ({
        data: {
          connectedCalendars: [
            { id: 1, name: 'Calendar 1' },
            { id: 2, name: 'Calendar 2' },
          ],
          destinationCalendar: {
            externalId: 'calendar-1',
          },
        },
        isLoading: false,
        isError: false,
      }),
    },
    setDestinationCalendar: {
      useMutation: () => ({
        mutate: () => {},
        isPending: false,
      }),
    },
  },
  useUtils: () => ({
    viewer: {
      connectedCalendars: {
        invalidate: () => Promise.resolve(),
      },
    },
  }),
};

// Override the actual trpc import with our mock
const trpc = mockTrpcImplementation;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return <DestinationCalendarSettingsWebWrapper />;
}