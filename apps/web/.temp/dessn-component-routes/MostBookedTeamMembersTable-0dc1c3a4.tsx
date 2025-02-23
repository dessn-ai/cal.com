import React from 'react';
import { useParentState } from '../useIframeState';
import { MostBookedTeamMembersTable } from '../../../../packages/features/insights/components/MostBookedTeamMembersTable';
import { trpc } from '@calcom/trpc';

// Create a wrapper component that provides all the necessary context
const MockProvider = ({ children }) => {
  // Mock the TRPC query hook
  const mockQueryHook = {
    data: [
      { name: 'John Doe', bookings: 50 },
      { name: 'Jane Smith', bookings: 45 },
      { name: 'Bob Johnson', bookings: 40 },
    ],
    isSuccess: true,
    isPending: false,
  };

  // Override the trpc hook implementation
  const originalUseQuery = trpc.viewer.insights.membersWithMostBookings.useQuery;
  trpc.viewer.insights.membersWithMostBookings.useQuery = () => mockQueryHook;

  // Mock useLocale
  const mockUseLocale = {
    t: (key: string) => key,
  };

  // Mock useInsightsParameters
  const mockInsightsParameters = {
    isAll: true,
    teamId: 1,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-31'),
    eventTypeId: null,
  };

  // Create a context value that includes all our mocks
  React.useEffect(() => {
    // @ts-ignore - Ignore type checking for mocking purposes
    window.useLocale = () => mockUseLocale;
    // @ts-ignore
    window.useInsightsParameters = () => mockInsightsParameters;

    return () => {
      // Cleanup
      delete window.useLocale;
      delete window.useInsightsParameters;
      trpc.viewer.insights.membersWithMostBookings.useQuery = originalUseQuery;
    };
  }, []);

  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return (
    <MockProvider>
      <MostBookedTeamMembersTable />
    </MockProvider>
  );
}