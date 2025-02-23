import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/DisableTeamImpersonation';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    memberId: {
      type: "number",
      value: 100,
      label: "Member ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  // Mock trpc
  const mockTrpc = {
    useUtils: () => ({}),
    viewer: {
      teams: {
        getMembershipbyUser: {
          useQuery: () => ({
            data: { disableImpersonation: false },
            isPending: false,
          }),
        },
        updateMembership: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      <ImportedComponent
        teamId={state.teamId.value}
        memberId={state.memberId.value}
        disabled={state.disabled.value}
      />
    </trpc.Provider>
  );
}