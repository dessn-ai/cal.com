import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/page/team-dsync-view';

import { trpc } from '@calcom/trpc/react';

// Mock trpc.viewer.organizations.listCurrent.useQuery
jest.mock('@calcom/trpc/react', () => ({
  trpc: {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: jest.fn(() => ({
            data: { id: '123' },
            isLoading: false,
            error: null,
          })),
        },
      },
    },
  },
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock @calcom/lib/constants
jest.mock('@calcom/lib/constants', () => ({
  HOSTED_CAL_FEATURES: true,
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    organizationId: {
      type: "string",
      value: "123",
      label: "Organization ID",
    },
  });

  return <ImportedComponent />;
}