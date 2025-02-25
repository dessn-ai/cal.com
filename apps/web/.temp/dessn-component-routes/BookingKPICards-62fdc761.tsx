import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingKPICards } from '../../../../packages/features/insights/components/BookingKPICards';

// Mock the entire module path
const mockTeamsData = {
  teams: [{ id: 1, name: 'Mock Team', slug: 'mock-team' }],
  isLoading: false,
  error: null
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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// Mock providers
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Create a wrapped version of BookingKPICards that includes the mock data
const WrappedBookingKPICards = () => {
  // Override the module's exports before rendering
  if (typeof window !== 'undefined') {
    (window as any).useInsightsOrgTeams = () => mockTeamsData;
    (window as any).useInsightsParameters = () => ({
      startDate: new Date(),
      endDate: new Date(),
      teamId: 1,
      userId: 1,
      isAll: false,
      memberUserId: 1,
      eventTypeId: 1
    });
  }

  return (
    <ErrorBoundary>
      <BookingKPICards />
    </ErrorBoundary>
  );
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

  React.useEffect(() => {
    // Ensure the mock is available after mount
    (window as any).useInsightsOrgTeams = () => mockTeamsData;
    (window as any).useInsightsParameters = () => ({
      startDate: new Date(),
      endDate: new Date(),
      teamId: 1,
      userId: 1,
      isAll: false,
      memberUserId: 1,
      eventTypeId: 1
    });
  }, []);

  return (
    <MockProvider>
      <WrappedBookingKPICards />
    </MockProvider>
  );
}

// Ensure the mock is available immediately
(window as any).useInsightsOrgTeams = () => mockTeamsData;
(window as any).useInsightsParameters = () => ({
  startDate: new Date(),
  endDate: new Date(),
  teamId: 1,
  userId: 1,
  isAll: false,
  memberUserId: 1,
  eventTypeId: 1
});