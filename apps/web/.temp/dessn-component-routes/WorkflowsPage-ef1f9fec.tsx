import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/index';

import { trpc } from '@calcom/trpc/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    filteredList: {
      type: 'string',
      value: JSON.stringify({
        totalCount: 5,
        filtered: [
          {
            id: 1,
            name: 'Sample Workflow 1',
            activeOn: [],
            steps: [],
            team: null,
          },
          {
            id: 2,
            name: 'Sample Workflow 2',
            activeOn: [],
            steps: [],
            team: null,
          },
        ],
      }),
      label: 'Filtered List',
    },
  });

  const parsedFilteredList = JSON.parse(state.filteredList.value);

  // Mock trpc
  trpc.viewer.workflows.filteredList.useQuery = () => ({
    data: parsedFilteredList,
    isPending: false,
  });

  trpc.viewer.workflows.create.useMutation = () => ({
    mutate: () => {},
    isPending: false,
  });

  // Mock useSession
  useSession.mockReturnValue({
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
      },
      hasValidLicense: true,
    },
  });

  // Mock useRouter
  useRouter.mockReturnValue({
    replace: () => Promise.resolve(),
  });

  return <ImportedComponent filteredList={parsedFilteredList} />;
}