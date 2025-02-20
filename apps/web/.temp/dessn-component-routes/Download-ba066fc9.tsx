import React from 'react';
import { useParentState } from '../useIframeState';
import { Download } from '../../../../packages/features/insights/filters/Download/Download';

// Create mock context for InsightsOrgTeams
const InsightsOrgTeamsContext = React.createContext({
  teams: [],
  isLoading: false,
  error: null
});

// Mock InsightsOrgTeamsProvider
const InsightsOrgTeamsProvider = ({ children }) => {
  const mockValue = {
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' }
    ],
    isLoading: false,
    error: null
  };

  return (
    <InsightsOrgTeamsContext.Provider value={mockValue}>
      {children}
    </InsightsOrgTeamsContext.Provider>
  );
};

// Mock TRPCProvider
const TRPCProvider = ({ children }) => {
  return (
    <div data-testid="mock-trpc-provider">
      {children}
    </div>
  );
};

// Mock InsightsProvider with enhanced context
const InsightsProvider = ({ children, ...props }) => {
  const contextValue = {
    ...props,
    loading: false,
    error: null,
    data: {
      metrics: [],
      timeRangeMetrics: []
    }
  };

  return (
    <div data-testid="mock-insights-provider">
      {children}
    </div>
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
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
    },
  });

  return (
    <TRPCProvider>
      <InsightsOrgTeamsProvider>
        <InsightsProvider
          startDate={new Date(state.startDate.value)}
          endDate={new Date(state.endDate.value)}
          teamId={state.teamId.value}
          userId={state.userId.value}
          eventTypeId={state.eventTypeId.value}
          memberUserId={state.memberUserId.value}>
          <Download />
        </InsightsProvider>
      </InsightsOrgTeamsProvider>
    </TRPCProvider>
  );
}