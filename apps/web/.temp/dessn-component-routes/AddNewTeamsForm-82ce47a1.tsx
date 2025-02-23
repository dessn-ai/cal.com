import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamsForm } from '../../../../packages/features/ee/organizations/components/AddNewTeamsForm';
import { trpc } from '@calcom/trpc/react';

// Mock the hooks directly
const useRouter = () => ({
  push: (path: string) => console.log('Navigation to:', path)
});

const useSession = () => ({
  data: {
    user: {
      role: "ADMIN"
    }
  }
});

// Mock the useRouterQuery hook
const useRouterQuery = () => {
  const [state] = useParentState({
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });
  
  return {
    id: state.orgId.value.toString()
  };
};

// Mock the required modules
import('@calcom/lib/hooks/useRouterQuery').then(module => {
  module.useRouterQuery = useRouterQuery;
});

import('next/navigation').then(module => {
  module.useRouter = useRouter;
});

import('next-auth/react').then(module => {
  module.useSession = useSession;
});

export default function ComponentPreview() {
  // Mock the trpc hooks
  const mockTeams = [
    { id: 1, name: "Team 1", slug: "team-1" },
    { id: 2, name: "Team 2", slug: "team-2" },
  ];

  const mockOrg = {
    id: 1,
    slug: "org-slug",
    metadata: {
      requestedSlug: "org-slug",
    },
  };

  // Create mock functions for trpc
  const mockTRPC = {
    viewer: {
      teams: {
        list: {
          useQuery: () => ({ data: mockTeams, isLoading: false }),
        },
        get: {
          useQuery: () => ({ data: mockOrg, isLoading: false }),
        },
      },
      organizations: {
        listMembers: {
          useQuery: () => ({ data: [], isLoading: false }),
        },
        createTeams: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
            isSuccess: false,
          }),
        },
        publish: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
  };

  // Override trpc for the component
  Object.assign(trpc, mockTRPC);

  return (
    <div>
      <AddNewTeamsForm />
    </div>
  );
}