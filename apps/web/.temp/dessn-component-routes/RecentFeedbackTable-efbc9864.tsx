import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of RecentFeedbackTable that doesn't depend on the hook
const SimplifiedRecentFeedbackTable = () => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-md border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
        <div className="text-sm text-gray-600">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">User</th>
                <th className="text-left py-2">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2" colSpan={3}>
                  No feedback data available in preview mode
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="p-4">
      <SimplifiedRecentFeedbackTable />
    </div>
  );
}

// Prevent the actual component from being imported
export const RecentFeedbackTable = SimplifiedRecentFeedbackTable;

// Mock the hooks that the original component tries to use
export const useInsightsOrgTeams = () => ({
  selectedTeamId: -1,
  setSelectedTeamId: () => {},
  teams: [],
  isLoading: false,
  orgMembers: [],
  currentOrg: { id: 1, name: 'Mock Org' },
  currentTeam: { id: -1, name: 'All Teams' }
});

export const useInsightsParameters = () => ({
  selectedTeamId: -1,
  dateRange: { startDate: new Date(), endDate: new Date() },
  selectedFilter: 'all',
  selectedUserId: null
});