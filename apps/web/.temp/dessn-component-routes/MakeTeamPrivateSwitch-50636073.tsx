import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MakeTeamPrivateSwitch';

import { trpc } from '@calcom/trpc/react';

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
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  const mockTrpc = {
    useUtils: () => ({
      viewer: {
        teams: {
          get: {
            invalidate: async () => {},
          },
        },
      },
    }),
    viewer: {
      teams: {
        update: {
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
        isPrivate={state.isPrivate.value}
        disabled={state.disabled.value}
        isOrg={state.isOrg.value}
      />
    </trpc.Provider>
  );
}