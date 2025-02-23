import React from 'react';
import { useParentState } from '../useIframeState';
import { DestinationCalendarSettingsWebWrapper } from '../../../../packages/platform/atoms/destination-calendar/wrappers/DestinationCalendarSettingsWebWrapper';

import { trpc } from "@calcom/trpc/react";

// Mock trpc
const mockTrpc = {
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
        invalidate: () => {},
      },
    },
  }),
};

// Mock the trpc import
jest.mock("@calcom/trpc/react", () => ({
  trpc: mockTrpc,
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return <DestinationCalendarSettingsWebWrapper />;
}