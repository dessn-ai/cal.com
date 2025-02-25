import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateButtonWithTeamsList } from '../../../../packages/ui/components/createButton/CreateButtonWithTeamsList';
import { trpc } from "@calcom/trpc/react";

// Create a mock wrapper component that provides the mock data
const MockTrpcProvider = ({ children }) => {
  const mockData = [
    { teamId: 1, name: 'Team 1', slug: 'team-1', image: 'https://example.com/team1.jpg', readOnly: false },
    { teamId: 2, name: 'Team 2', slug: 'team-2', image: 'https://example.com/team2.jpg', readOnly: false },
    { teamId: null, name: 'User Profile', slug: 'user-profile', image: 'https://example.com/user.jpg', readOnly: false },
  ];

  // Override the useQuery hook
  const originalUseQuery = trpc.viewer.teamsAndUserProfilesQuery.useQuery;
  trpc.viewer.teamsAndUserProfilesQuery.useQuery = () => ({
    data: mockData,
    isLoading: false,
    error: null,
  });

  try {
    return children;
  } finally {
    // Restore the original useQuery
    trpc.viewer.teamsAndUserProfilesQuery.useQuery = originalUseQuery;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onlyShowWithTeams: {
      type: "boolean",
      value: false,
      label: "Only Show With Teams",
    },
    onlyShowWithNoTeams: {
      type: "boolean",
      value: false,
      label: "Only Show With No Teams",
    },
    isAdmin: {
      type: "boolean",
      value: false,
      label: "Is Admin",
    },
    includeOrg: {
      type: "boolean",
      value: false,
      label: "Include Org",
    },
  });

  return (
    <MockTrpcProvider>
      <CreateButtonWithTeamsList
        onlyShowWithTeams={state.onlyShowWithTeams.value}
        onlyShowWithNoTeams={state.onlyShowWithNoTeams.value}
        isAdmin={state.isAdmin.value}
        includeOrg={state.includeOrg.value}
      />
    </MockTrpcProvider>
  );
}