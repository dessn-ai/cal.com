import React from 'react';
import { useParentState } from '../useIframeState';
import { OtherTeamsListing } from '../../../../packages/features/ee/organizations/pages/components/OtherTeamsListing';

import { trpc } from '@calcom/trpc/react';

// Mock the trpc hook
const mockUseQuery = () => ({
  data: [],
  isPending: false,
  error: null,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    organizations: {
      listOtherTeams: {
        useQuery: mockUseQuery,
      },
    },
  },
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
    teamsCount: {
      type: "number",
      value: 0,
      label: "Number of Teams",
    },
  });

  // Override the trpc hook with our mock data
  (trpc as any) = mockTrpc;

  // Override the useLocale hook
  (useLocale as any) = mockUseLocale;

  // Modify the mock data based on the state
  mockUseQuery.mockImplementation(() => ({
    data: Array(state.teamsCount.value).fill({ id: 1, name: 'Team' }),
    isPending: state.isPending.value,
    error: state.hasError.value ? new Error("Mock error") : null,
  }));

  return <OtherTeamsListing />;
}