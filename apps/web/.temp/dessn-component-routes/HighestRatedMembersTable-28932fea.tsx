import React from 'react';
import { useParentState } from '../useIframeState';
import { HighestRatedMembersTable } from '../../../../packages/features/insights/components/HighestRatedMembersTable';

import { trpc } from '@calcom/trpc';

// Mock the trpc.viewer.insights.membersWithHighestRatings.useQuery
const mockUseQuery = () => ({
  data: [
    { id: 1, name: 'John Doe', rating: 4.8, feedbackCount: 50 },
    { id: 2, name: 'Jane Smith', rating: 4.7, feedbackCount: 45 },
    { id: 3, name: 'Bob Johnson', rating: 4.6, feedbackCount: 40 },
  ],
  isSuccess: true,
  isPending: false,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    insights: {
      membersWithHighestRatings: {
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
  eventTypeId: 1,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date('2023-01-01').toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date('2023-12-31').toISOString(),
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  // Override the necessary hooks and modules
  React.useEffect(() => {
    (global as any).trpc = mockTrpc;
    (global as any).useLocale = mockUseLocale;
    (global as any).useInsightsParameters = mockUseInsightsParameters;
  }, []);

  return <HighestRatedMembersTable />;
}