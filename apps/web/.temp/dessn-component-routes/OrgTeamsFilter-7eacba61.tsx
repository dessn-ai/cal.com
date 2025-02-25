import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgTeamsFilter } from '../../../../packages/features/insights/filters/OrgTeamsFilter';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@calcom/trpc';

// Create a proper session structure
const mockSession = {
  expires: "1",
  user: {
    id: "user1",
    email: "user@example.com",
    name: "John Doe",
    username: "johndoe",
    org: {
      id: 1,
      name: "Test Org",
      slug: "test-org",
    },
    organizationId: 1,
    teams: [
      { id: 1, name: 'Team 1', logoUrl: 'https://example.com/logo1.jpg', isOrg: true },
      { id: 2, name: 'Team 2', logoUrl: 'https://example.com/logo2.jpg', isOrg: false },
      { id: 3, name: 'Team 3', logoUrl: 'https://example.com/logo3.jpg', isOrg: false },
    ],
  }
};

// Create a mock QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock data for teams
const mockTeamsData = [
  { id: 1, name: 'Team 1', logoUrl: 'https://example.com/logo1.jpg', isOrg: true },
  { id: 2, name: 'Team 2', logoUrl: 'https://example.com/logo2.jpg', isOrg: false },
  { id: 3, name: 'Team 3', logoUrl: 'https://example.com/logo3.jpg', isOrg: false },
];

// Create a wrapper component that provides all necessary context
const ComponentWithProviders = ({ children }: { children: React.ReactNode }) => {
  // Set up the mock data in the QueryClient
  React.useEffect(() => {
    queryClient.setQueryData(
      ['viewer.insights.teamListForUser'],
      mockTeamsData
    );
  }, []);

  const insightsOrgTeamsDefaultValue = {
    selectedTeamId: mockTeamsData[0].id,
    teams: mockTeamsData,
    orgId: mockSession.user.org.id,
  };

  return (
    <SessionProvider session={mockSession}>
      <QueryClientProvider client={queryClient}>
        <InsightsOrgTeamsProvider defaultValue={insightsOrgTeamsDefaultValue}>
          {children}
        </InsightsOrgTeamsProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <ComponentWithProviders>
      <OrgTeamsFilter />
    </ComponentWithProviders>
  );
}