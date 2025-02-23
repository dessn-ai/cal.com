import React from 'react';
import { useParentState } from '../useIframeState';
import { OutOfOfficeEntriesList } from '../../../../packages/features/settings/outOfOffice/OutOfOfficeEntriesList';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  // Mock trpc.useUtils
  const mockUtils = {
    viewer: {
      outOfOfficeEntriesList: {
        invalidate: () => {},
      },
    },
  };

  // Mock trpc hooks
  trpc.useUtils = () => mockUtils;
  trpc.viewer.outOfOfficeEntriesList.useQuery = () => ({
    data: [
      {
        id: 1,
        uuid: 'uuid1',
        start: new Date('2023-07-01'),
        end: new Date('2023-07-07'),
        toUser: { username: 'john' },
        reason: { emoji: '🏖️' },
        notes: 'Vacation',
      },
      {
        id: 2,
        uuid: 'uuid2',
        start: new Date('2023-08-15'),
        end: new Date('2023-08-20'),
        toUser: { username: 'jane' },
        reason: { emoji: '🏔️' },
        notes: 'Mountain retreat',
      },
    ],
    isPending: false,
  });
  trpc.viewer.outOfOfficeEntryDelete.useMutation = () => ({
    mutate: () => {},
    isPending: false,
  });

  return <OutOfOfficeEntriesList />;
}