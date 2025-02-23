import React from 'react';
import { useParentState } from '../useIframeState';
import { LeastBookedTeamMembersTable } from '../../../../packages/features/insights/components/LeastBookedTeamMembersTable';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Create mock contexts
const DataTableContext = React.createContext({});
const InsightsContext = React.createContext({
  filter: {
    dateRange: { startDate: new Date(), endDate: new Date() },
    teamId: undefined,
    userId: undefined,
    eventTypeId: undefined,
    isAll: true,
  },
  setFilter: () => {},
});

const MockDataTableProvider = ({ children }) => {
  return (
    <DataTableContext.Provider value={{}}>
      {children}
    </DataTableContext.Provider>
  );
};

const MockInsightsProvider = ({ children }) => {
  return (
    <InsightsContext.Provider 
      value={{
        filter: {
          dateRange: { startDate: new Date(), endDate: new Date() },
          teamId: undefined,
          userId: undefined,
          eventTypeId: undefined,
          isAll: true,
        },
        setFilter: () => {},
      }}
    >
      {children}
    </InsightsContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return (
    <MockInsightsProvider>
      <MockDataTableProvider>
        <InsightsOrgTeamsProvider>
          <LeastBookedTeamMembersTable />
        </InsightsOrgTeamsProvider>
      </MockDataTableProvider>
    </MockInsightsProvider>
  );
}