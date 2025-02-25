import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/other-team-members-view';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isTeamPrivate: {
      type: "boolean",
      value: false,
      label: "Is Team Private",
    },
    membershipRole: {
      type: "dropdown",
      value: MembershipRole.MEMBER,
      options: Object.values(MembershipRole),
      label: "Membership Role",
    },
  });

  // Mock the necessary context and hooks
  const mockRouter = {
    replace: () => {},
  };

  const mockSession = {
    data: {
      user: {
        org: 'mockOrg',
      },
    },
  };

  const mockTrpc = {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: () => ({
            data: {
              user: {
                role: state.membershipRole.value,
              },
            },
          }),
        },
        getOtherTeam: {
          useQuery: () => ({
            data: {
              id: state.teamId.value,
              isPrivate: state.isTeamPrivate.value,
            },
            isPending: false,
          }),
        },
        getMembers: {
          useQuery: () => ({
            data: [],
            isPending: false,
          }),
        },
        listOtherTeamMembers: {
          useInfiniteQuery: () => ({
            data: {
              pages: [
                {
                  rows: [],
                },
              ],
            },
            fetchNextPage: () => {},
            isFetchingNextPage: false,
            hasNextPage: false,
          }),
        },
      },
      teams: {
        inviteMember: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
    useUtils: () => ({}),
  };

  // Wrap the component with necessary context providers
  return (
    <React.Fragment>
      <ImportedComponent />
    </React.Fragment>
  );
}