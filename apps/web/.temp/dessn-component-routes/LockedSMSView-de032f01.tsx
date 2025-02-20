import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/admin/locked-sms-view';

import { trpc } from "@calcom/trpc";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  // Mock trpc context and mutation
  const mockTrpc = {
    useContext: () => ({
      viewer: {
        admin: {
          getSMSLockStateTeamsUsers: {
            invalidate: () => {},
          },
        },
      },
    }),
    viewer: {
      admin: {
        setSMSLockState: {
          useMutation: () => ({
            mutate: (params) => {
              console.log('Mutation called with params:', params);
            },
          }),
        },
      },
    },
  };

  // Provide the mocked trpc to the component
  (trpc as any) = mockTrpc;

  return <ImportedComponent />;
}