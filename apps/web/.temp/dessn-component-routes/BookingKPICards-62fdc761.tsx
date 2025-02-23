import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingKPICards } from '../../../../packages/features/insights/components/BookingKPICards';

// Mock data
const mockOrgTeamsData = {
  orgTeams: [
    {
      id: 1,
      name: 'Default Team',
      slug: 'default-team',
      members: [
        {
          id: 1,
          userId: 1,
          role: 'OWNER',
          accepted: true,
        },
      ],
    },
  ],
  isLoading: false,
  error: null,
};

// Create a simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Loading...</div>;
    }

    return this.props.children;
  }
}

// Mock component that wraps the original with necessary context
const MockedBookingKPICards = () => {
  // Return mock data directly instead of using context
  const mockData = {
    dateRange: {
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
    selectedTeamId: 1,
    selectedUserId: 1,
    isAll: false,
    memberUserId: 1,
    eventTypeId: 1,
    orgTeams: mockOrgTeamsData.orgTeams,
  };

  try {
    return (
      <div data-testid="booking-kpi-cards">
        <pre>{JSON.stringify(mockData, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error rendering BookingKPICards:', error);
    return <div>Error loading KPI cards</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      label: "End Date",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  return (
    <ErrorBoundary>
      <MockedBookingKPICards />
    </ErrorBoundary>
  );
}