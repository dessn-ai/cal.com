import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsListing } from '../../../../packages/features/ee/teams/components/TeamsListing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock wrapper component
const MockedTeamsListing = () => {
  // Mock the data that TeamsListing might need
  const mockTeams = [
    {
      id: 1,
      name: "Test Team",
      slug: "test-team",
      bio: "Test team bio",
      members: [],
      membership: {
        accepted: true,
        role: "OWNER",
      },
    }
  ];

  const mockMe = {
    id: 1,
    username: "testuser",
    email: "test@example.com",
    teams: mockTeams,
  };

  // Return a simplified version of TeamsListing
  return (
    <div className="teams-listing">
      <h2>Teams</h2>
      <div className="teams-grid">
        {mockTeams.map((team) => (
          <div key={team.id} className="team-card">
            <h3>{team.name}</h3>
            <p>{team.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  try {
    return (
      <QueryClientProvider client={queryClient}>
        <div style={{ padding: '20px' }}>
          <MockedTeamsListing />
        </div>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error('Error rendering TeamsListing:', error);
    return (
      <div style={{ 
        padding: '20px', 
        color: 'red', 
        border: '1px solid red', 
        borderRadius: '4px' 
      }}>
        Error loading teams listing. Please check the console for more details.
      </div>
    );
  }
}