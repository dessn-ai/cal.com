import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/pages/team-members-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private",
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
    isOrgAdminOrOwner: {
      type: "boolean",
      value: false,
      label: "Is Org Admin or Owner",
    },
  });

  // Mock the necessary context and hooks
  const mockSession = {
    data: {
      user: {
        id: 'user-id',
        org: {
          role: 'MEMBER',
        },
      },
    },
  };

  const mockRouter = {
    replace: () => {},
  };

  const mockTrpc = {
    viewer: {
      teams: {
        get: {
          useQuery: () => ({
            data: {
              id: state.teamId.value,
              name: 'Mock Team',
              slug: 'mock-team',
              membership: {
                accepted: true,
                role: 'ADMIN',
              },
              isPrivate: state.isPrivate.value,
              inviteToken: {
                token: 'mock-token',
                expiresInDays: 7,
              },
            },
            isPending: false,
            error: null,
          }),
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ImportedComponent
        session={mockSession}
        router={mockRouter}
        trpc={mockTrpc}
      />
    </React.Fragment>
  );
}