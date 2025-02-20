import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingKPICards } from '../../../../packages/features/insights/components/RoutingKPICards';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Override the hooks by creating them in the same scope
export function useDataTable() {
  return {
    activeFilters: [],
    setActiveFilters: () => {},
    columns: [],
    data: [],
    initialState: {},
    tableState: {},
    setTableState: () => {},
    isLoading: false,
    page: 0,
    sorting: [],
    setSorting: () => {},
    tableRef: { current: null },
  };
}

export function useFilterValue() {
  return undefined;
}

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
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "number",
      value: 1,
      label: "Routing Form ID",
    },
  });

  // Mock data for InsightsOrgTeamsProvider
  const mockTeamsData = {
    teams: [
      {
        id: state.teamId.value,
        name: "Mock Team",
        members: [{ id: state.userId.value }],
      }
    ],
    loading: false,
    error: null
  };

  try {
    return (
      <div className="w-full">
        <InsightsOrgTeamsProvider value={mockTeamsData}>
          <RoutingKPICards 
            teamId={state.teamId.value}
            startDate={new Date(state.startDate.value)}
            endDate={new Date(state.endDate.value)}
            userId={state.userId.value}
            isAll={state.isAll.value}
            routingFormId={state.routingFormId.value}
          />
        </InsightsOrgTeamsProvider>
      </div>
    );
  } catch (error) {
    console.error("Error rendering RoutingKPICards:", error);
    return (
      <div className="p-4 text-red-500">
        Error loading RoutingKPICards component. The component requires proper context providers.
      </div>
    );
  }
}