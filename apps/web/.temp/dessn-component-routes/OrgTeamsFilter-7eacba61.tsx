import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgTeamsFilter } from '../../../../packages/features/insights/filters/OrgTeamsFilter';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock data
const mockTeamsData = [
  { id: 1, name: 'Team 1', logoUrl: 'https://example.com/logo1.jpg', isOrg: true },
  { id: 2, name: 'Team 2', logoUrl: 'https://example.com/logo2.jpg', isOrg: false },
  { id: 3, name: 'Team 3', logoUrl: 'https://example.com/logo3.jpg', isOrg: false },
];

// Mock the trpc hook result
const mockTrpcResult = {
  data: mockTeamsData,
  isLoading: false,
  error: null
};

// Mock the session
const mockSession = {
  data: {
    user: {
      org: { id: 1 },
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
    },
  },
  status: "authenticated"
};

// Create a wrapper component that provides all necessary context
const ContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock next-auth session
  React.useEffect(() => {
    const mockUseSession = () => mockSession;
    (window as any).useSession = mockUseSession;
  }, []);

  // Mock trpc
  React.useEffect(() => {
    (window as any).trpc = {
      viewer: {
        insights: {
          teamListForUser: {
            useQuery: () => mockTrpcResult
          }
        }
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <InsightsOrgTeamsProvider>
        {children}
      </InsightsOrgTeamsProvider>
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <ContextWrapper>
      <OrgTeamsFilter />
    </ContextWrapper>
  );
}