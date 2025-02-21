import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/index';

import { SessionProvider } from 'next-auth/react';
import { trpc } from '@calcom/trpc/react';
import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    filteredList: {
      type: 'string',
      value: JSON.stringify({
        totalCount: 5,
        filtered: [
          { id: 1, name: 'Workflow 1' },
          { id: 2, name: 'Workflow 2' },
          { id: 3, name: 'Workflow 3' },
          { id: 4, name: 'Workflow 4' },
          { id: 5, name: 'Workflow 5' },
        ],
      }),
      label: 'Filtered List',
    },
  });

  const mockSession = {
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
      },
      hasValidLicense: true,
    },
    status: 'authenticated',
  };

  const mockTrpc = {
    viewer: {
      workflows: {
        filteredList: {
          useQuery: () => ({
            data: JSON.parse(state.filteredList.value),
            isPending: false,
          }),
        },
        create: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <SessionProvider session={mockSession as any}>
      <TRPCProvider>
        <ImportedComponent
          filteredList={JSON.parse(state.filteredList.value)}
        />
      </TRPCProvider>
    </SessionProvider>
  );
}