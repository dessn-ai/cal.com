import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { HighestNoShowHostTable } from '../../../../packages/features/insights/components/HighestNoShowHostTable';
import { trpc } from '@calcom/trpc';

// Create the InsightsOrgTeamsContext
export const InsightsOrgTeamsContext = createContext(null);

// Create the hook that components will use
export const useInsightsOrgTeams = () => {
  const context = useContext(InsightsOrgTeamsContext);
  if (!context) {
    throw new Error('useInsightsOrgTeams must be used within a InsightsOrgTeamsProvider');
  }
  return context;
};

// Create the InsightsOrgTeamsProvider
const InsightsOrgTeamsProvider = ({ children }) => {
  const mockData = {
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
    ],
    loading: false,
    error: null,
    selectedTeamId: 1,
    setSelectedTeamId: () => {},
  };

  return (
    <InsightsOrgTeamsContext.Provider value={mockData}>
      {children}
    </InsightsOrgTeamsContext.Provider>
  );
};

// Create InsightsContext
const InsightsContext = createContext({
  teamId: 1,
  startDate: '',
  endDate: '',
  eventTypeId: null,
  isAll: false,
});

// Create InsightsProvider
const InsightsProvider = ({ children, teamId, startDate, endDate, eventTypeId, isAll }) => {
  const contextValue = {
    teamId,
    startDate,
    endDate,
    eventTypeId,
    isAll,
  };

  return (
    <InsightsContext.Provider value={contextValue}>
      {children}
    </InsightsContext.Provider>
  );
};

// Export useInsights hook
export const useInsights = () => {
  const context = useContext(InsightsContext);
  if (!context) {
    throw new Error('useInsights must be used within an InsightsProvider');
  }
  return context;
};

// Export useInsightsParameters hook
export const useInsightsParameters = () => {
  const { teams, selectedTeamId } = useInsightsOrgTeams();
  const { teamId, startDate, endDate, eventTypeId, isAll } = useInsights();
  
  return {
    teamId: selectedTeamId || teamId,
    startDate,
    endDate,
    eventTypeId,
    isAll,
  };
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
  });

  return (
    <InsightsOrgTeamsProvider>
      <InsightsProvider
        teamId={state.teamId.value}
        startDate={state.startDate.value}
        endDate={state.endDate.value}
        eventTypeId={state.eventTypeId.value}
        isAll={state.isAll.value}
      >
        <HighestNoShowHostTable />
      </InsightsProvider>
    </InsightsOrgTeamsProvider>
  );
}