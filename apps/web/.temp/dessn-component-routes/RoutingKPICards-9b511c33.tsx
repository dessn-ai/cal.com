import React from 'react';
import { useParentState } from '../useIframeState';

// Mock RoutingKPICards component
const MockRoutingKPICards = ({ 
  teamId,
  startDate,
  endDate,
  userId,
  isAll,
  routingFormId 
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Routing Form Analytics</h2>
        <p className="text-sm text-gray-500">
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Views</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">1,234</div>
          <div className="mt-2 text-xs text-green-600">↑ 12% from last period</div>
        </div>
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Conversion Rate</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">45%</div>
          <div className="mt-2 text-xs text-green-600">↑ 5% from last period</div>
        </div>
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Submissions</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">567</div>
          <div className="mt-2 text-xs text-red-600">↓ 3% from last period</div>
        </div>
      </div>
      <div className="mt-4 rounded-lg border bg-white p-4 text-sm">
        <h3 className="font-medium text-gray-700">Current Settings</h3>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <span className="text-gray-500">Team ID:</span> {teamId}
          </div>
          <div>
            <span className="text-gray-500">User ID:</span> {userId}
          </div>
          <div>
            <span className="text-gray-500">Form ID:</span> {routingFormId}
          </div>
          <div>
            <span className="text-gray-500">View:</span> {isAll ? 'All Data' : 'Filtered'}
          </div>
        </div>
      </div>
    </div>
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

  try {
    return (
      <MockRoutingKPICards 
        teamId={state.teamId.value}
        startDate={new Date(state.startDate.value)}
        endDate={new Date(state.endDate.value)}
        userId={state.userId.value}
        isAll={state.isAll.value}
        routingFormId={state.routingFormId.value}
      />
    );
  } catch (error) {
    console.error('Error rendering RoutingKPICards:', error);
    return <div>Error loading component</div>;
  }
}