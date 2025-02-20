import React from 'react';
import { useParentState } from '../useIframeState';
import { MostBookedTeamMembersTable } from '../../../../packages/features/insights/components/MostBookedTeamMembersTable';

import { trpc } from '@calcom/trpc';

// Mock the trpc.viewer.insights.membersWithMostBookings.useQuery
const mockUseQuery = () => ({
  data: [
    { name: 'John Doe', bookings: 50 },
    { name: 'Jane Smith', bookings: 45 },
    { name: 'Bob Johnson', bookings: 40 },
  ],
  isSuccess: true,
  isPending: false,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    insights: {
      membersWithMostBookings: {
        useQuery: mockUseQuery,
      },
    },
  },
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Mock the useInsightsParameters hook
const mockUseInsightsParameters = () => ({
  isAll: true,
  teamId: 1,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: null,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  // Provide the mocked dependencies
  (trpc as any) = mockTrpc;
  (useLocale as any) = mockUseLocale;
  (useInsightsParameters as any) = mockUseInsightsParameters;

  return <MostBookedTeamMembersTable />;
}