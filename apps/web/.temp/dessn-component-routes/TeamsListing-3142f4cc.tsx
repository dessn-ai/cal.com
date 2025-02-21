import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsListing } from '../../../../packages/features/ee/teams/components/TeamsListing';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock trpc context
  const mockTrpc = {
    useUtils: () => ({}),
    viewer: {
      teams: {
        list: {
          useQuery: () => ({
            data: [],
            isPending: false,
            error: null,
          }),
        },
        inviteMemberByToken: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
      me: {
        useQuery: () => ({
          data: {},
        }),
      },
    },
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      <TeamsListing />
    </trpc.Provider>
  );
}