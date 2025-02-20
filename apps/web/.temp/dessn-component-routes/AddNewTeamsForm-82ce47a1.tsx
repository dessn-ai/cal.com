import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamsForm } from '../../../../packages/features/ee/organizations/components/AddNewTeamsForm';
import { useForm } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a wrapper component that provides the router query context
const RouterQueryWrapper = ({ children }: { children: React.ReactNode }) => {
  const MockRouterQuery = () => {
    const actualUseRouterQuery = jest.requireActual('@calcom/lib/hooks/useRouterQuery').useRouterQuery;
    return { ...actualUseRouterQuery(), id: "1" };
  };

  // Mock the module
  jest.mock('@calcom/lib/hooks/useRouterQuery', () => ({
    useRouterQuery: MockRouterQuery
  }));

  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  // Mock session data
  const mockSession = {
    data: {
      user: {
        id: "user-1",
        name: "Test User",
        email: "test@example.com",
        role: "ADMIN"
      },
      expires: "2024-01-01"
    },
    status: "authenticated"
  };

  // Mock the trpc hooks with proper typing
  const mockTeams = [
    { 
      id: 1, 
      name: "Team 1", 
      slug: "team-1",
      parentId: null
    },
    { 
      id: 2, 
      name: "Team 2", 
      slug: "team-2",
      parentId: null
    },
  ];

  const mockOrg = {
    id: state.orgId.value,
    slug: "org-slug",
    metadata: {
      requestedSlug: "org-slug"
    }
  };

  // Create proper mock query results
  const createMockQuery = (data: any) => ({
    data,
    isLoading: false,
    error: null,
    isSuccess: true,
    status: 'success',
    isFetching: false,
    refetch: async () => ({ data }),
    remove: () => {},
    fetchStatus: 'idle',
    failureCount: 0,
    failureReason: null,
    errorUpdateCount: 0,
    isError: false,
    isPaused: false,
    isLoadingError: false,
    isPending: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    dataUpdatedAt: Date.now(),
    errorUpdatedAt: 0,
    isFetched: true,
    isFetchedAfterMount: true,
    isInitialLoading: false,
  });

  const createMockMutation = () => ({
    mutate: async () => {},
    mutateAsync: async () => {},
    isLoading: false,
    error: null,
    isSuccess: false,
    status: 'idle',
    isPending: false,
    variables: undefined,
    failureCount: 0,
    failureReason: null,
    reset: () => {},
  });

  // Mock all required trpc queries with proper React Query structure
  const mockQueries = {
    viewer: {
      teams: {
        list: {
          useQuery: () => createMockQuery(mockTeams)
        },
        get: {
          useQuery: () => createMockQuery(mockOrg)
        },
        hasTeamPlan: {
          useQuery: () => createMockQuery(true)
        }
      },
      organizations: {
        getMembers: {
          useQuery: () => createMockQuery([])
        },
        createTeams: {
          useMutation: () => createMockMutation()
        },
        publish: {
          useMutation: () => createMockMutation()
        }
      }
    }
  };

  React.useEffect(() => {
    // Override the trpc object
    Object.defineProperty(trpc, 'viewer', {
      get: () => mockQueries.viewer,
      configurable: true
    });
  }, []);

  // Create a mock router
  const mockRouter = {
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    prefetch: () => Promise.resolve(),
    back: () => {},
    forward: () => {},
    refresh: () => {},
    pathname: '/',
    query: { id: '1' }
  };

  // Mock the useRouter hook
  React.useEffect(() => {
    const nextNavigation = require('next/navigation');
    const originalUseRouter = nextNavigation.useRouter;
    nextNavigation.useRouter = () => mockRouter;
    
    return () => {
      nextNavigation.useRouter = originalUseRouter;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={mockSession}>
        <div>
          <AddNewTeamsForm />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}