import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamMembersForm } from '../../../../packages/features/ee/teams/components/AddNewTeamMembers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

// Create a new QueryClient
const queryClient = new QueryClient();

// Mock organization branding data
const mockOrgBranding = {
  orgBrand: {
    id: 1,
    name: 'Test Organization',
    slug: 'test-org',
    logoUrl: null,
    fullDomain: 'test-org.cal.com',
    domainSuffix: 'cal.com',
    role: 'ADMIN',
    theme: null,
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    hideBranding: false
  }
};

// Mock the trpc context
const TRPCContext = React.createContext({
  viewer: {
    teams: {
      get: {
        useQuery: () => ({
          data: {
            id: 1,
            name: 'Test Team',
            inviteToken: {
              token: 'test-token',
              expiresInDays: 7
            }
          },
          isPending: false
        })
      },
      listMembers: {
        useInfiniteQuery: () => ({
          data: {
            pages: [{
              members: [],
              nextCursor: null
            }]
          },
          fetchNextPage: () => {},
          isFetchingNextPage: false,
          hasNextPage: false
        })
      },
      publish: {
        useMutation: () => ({
          mutate: () => {},
          isPending: false
        })
      },
      removeMember: {
        useMutation: () => ({
          mutate: () => {},
          isPending: false
        })
      }
    },
    organizations: {
      getMembers: {
        useQuery: () => ({
          data: []
        })
      }
    },
    eventTypes: {
      invalidate: () => Promise.resolve()
    }
  },
  useUtils: () => ({
    viewer: {
      teams: {
        get: {
          invalidate: () => Promise.resolve()
        },
        listMembers: {
          invalidate: () => Promise.resolve()
        }
      },
      eventTypes: {
        invalidate: () => Promise.resolve()
      }
    }
  })
});

// Create mock hooks
const useSession = () => ({
  data: {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      org: {
        role: 'ADMIN'
      }
    }
  },
  status: 'authenticated'
});

const useRouter = () => ({
  push: () => {},
  refresh: () => {},
  prefetch: () => {},
  replace: () => {}
});

// Override the real imports with our mocks
React.createContext('trpc', TRPCContext);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <TRPCContext.Provider value={TRPCContext._currentValue}>
        <QueryClientProvider client={queryClient}>
          <AddNewTeamMembersForm
            teamId={state.teamId.value}
            isOrg={state.isOrg.value}
          />
        </QueryClientProvider>
      </TRPCContext.Provider>
    </OrgBrandingProvider>
  );
}

// Mock the modules at the top level
import.meta.glob = () => ({
  'next-auth/react': () => ({
    useSession
  }),
  'next/navigation': () => ({
    useRouter
  }),
  '@calcom/trpc/react': () => ({
    trpc: TRPCContext._currentValue
  })
});