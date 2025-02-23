import React from 'react';
import { useParentState } from '../useIframeState';
import { Download } from '@calcom/features/insights/filters/Download/Download';

// Mock InsightsContext with typical insights data structure
const InsightsContext = React.createContext({
  startDate: new Date(),
  endDate: new Date(),
  teamId: null,
  userId: null,
  eventTypeId: null,
  memberUserId: null,
  isLoading: false,
});

// Mock InsightsProvider
const MockInsightsProvider = ({ children, ...props }) => {
  return (
    <InsightsContext.Provider value={{
      ...props,
      isLoading: false,
    }}>
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
    <MockInsightsProvider
      startDate={new Date(state.startDate.value)}
      endDate={new Date(state.endDate.value)}
      teamId={state.teamId.value}
      userId={state.userId.value}
      eventTypeId={state.eventTypeId.value}
      memberUserId={state.memberUserId.value}>
      <Download />
    </MockInsightsProvider>
  );
}