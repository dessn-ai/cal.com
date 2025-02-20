import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgTeamsFilter } from '../../../../packages/features/insights/filters/OrgTeamsFilter';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Mock the session hook
const useSession = () => ({
  data: {
    user: {
      org: { id: 1 },
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
    },
  },
  status: "authenticated"
});

// Mock the trpc hook
const trpc = {
  viewer: {
    insights: {
      teamListForUser: {
        useQuery: () => ({
          data: [
            { id: 1, name: 'Team 1', logoUrl: 'https://example.com/logo1.jpg', isOrg: true },
            { id: 2, name: 'Team 2', logoUrl: 'https://example.com/logo2.jpg', isOrg: false },
            { id: 3, name: 'Team 3', logoUrl: 'https://example.com/logo3.jpg', isOrg: false },
          ],
          isLoading: false,
          error: null
        })
      }
    }
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <InsightsOrgTeamsProvider>
      <div className="mock-provider-context">
        <OrgTeamsFilter />
      </div>
    </InsightsOrgTeamsProvider>
  );
}