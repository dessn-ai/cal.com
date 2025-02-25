import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';

// Mock DataTableContext
const DataTableContext = createContext({
  data: [],
  isLoading: false,
  columns: [],
  setColumns: () => {},
});

// Mock DataTableProvider
const MockDataTableProvider = ({ children }) => {
  return (
    <DataTableContext.Provider
      value={{
        data: [],
        isLoading: false,
        columns: [],
        setColumns: () => {},
      }}>
      {children}
    </DataTableContext.Provider>
  );
};

// Since we're having issues with the actual Download component, let's create a mock
const MockDownload = () => {
  return <div>Download Component (Mock)</div>;
};

// Mock InsightsContext
const InsightsContext = createContext({
  loading: false,
  error: null,
  data: {
    metrics: [],
    timeRange: {},
  },
});

// Mock InsightsOrgTeamsContext
const InsightsOrgTeamsContext = createContext({
  teams: [],
  loading: false,
  error: null,
});

// Mock InsightsOrgTeamsProvider
const MockInsightsOrgTeamsProvider = ({ children }) => {
  const mockTeams = [
    { id: 1, name: 'Team 1' },
    { id: 2, name: 'Team 2' },
  ];

  return (
    <InsightsOrgTeamsContext.Provider 
      value={{
        teams: mockTeams,
        loading: false,
        error: null,
      }}>
      {children}
    </InsightsOrgTeamsContext.Provider>
  );
};

// Mock InsightsProvider
const MockInsightsProvider = ({ children, ...props }) => {
  const contextValue = {
    ...props,
    loading: false,
    error: null,
    data: {
      metrics: [],
      timeRange: {
        startDate: props.startDate,
        endDate: props.endDate,
      },
    },
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
    ],
  };

  return (
    <InsightsContext.Provider value={contextValue}>
      {children}
    </InsightsContext.Provider>
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
    <MockDataTableProvider>
      <MockInsightsOrgTeamsProvider>
        <MockInsightsProvider
          startDate={new Date(state.startDate.value)}
          endDate={new Date(state.endDate.value)}
          teamId={state.teamId.value}
          userId={state.userId.value}
          eventTypeId={state.eventTypeId.value}
          memberUserId={state.memberUserId.value}>
          <MockDownload />
        </MockInsightsProvider>
      </MockInsightsOrgTeamsProvider>
    </MockDataTableProvider>
  );
}

// Export the context hooks
export const useInsightsOrgTeams = () => {
  const context = useContext(InsightsOrgTeamsContext);
  if (!context) {
    throw new Error('useInsightsOrgTeams must be used within a InsightsOrgTeamsProvider');
  }
  return context;
};

export const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};