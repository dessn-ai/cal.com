import React from 'react';
import { useParentState } from '../useIframeState';
import { LowestRatedMembersTable } from '../../../../packages/features/insights/components/LowestRatedMembersTable';

// Mock context for InsightsOrgTeams
const MockInsightsOrgTeamsContext = React.createContext(null);

// Create a custom hook that will override the original useInsightsOrgTeams
export const useInsightsOrgTeams = () => {
  return {
    teams: [
      {
        id: 1,
        name: "Default Team",
        slug: "default-team",
      }
    ],
    loading: false,
    error: null,
    selectedTeam: {
      id: 1,
      name: "Default Team",
      slug: "default-team",
    },
    setSelectedTeam: () => {},
  };
};

const MockInsightsOrgTeamsProvider = ({ children }) => {
  const mockValue = useInsightsOrgTeams();

  return (
    <MockInsightsOrgTeamsContext.Provider value={mockValue}>
      {children}
    </MockInsightsOrgTeamsContext.Provider>
  );
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
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString(),
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
    <MockInsightsOrgTeamsProvider>
      <LowestRatedMembersTable 
        teamId={state.teamId.value}
        startDate={state.startDate.value}
        endDate={state.endDate.value}
        eventTypeId={state.eventTypeId.value}
        isAll={state.isAll.value}
      />
    </MockInsightsOrgTeamsProvider>
  );
}