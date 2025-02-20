import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/GroupTeamMappingTable';

import { trpc } from '@calcom/trpc/react';

// Mock trpc.viewer.dsync.teamGroupMapping.get.useQuery
const mockUseQuery = () => ({
  data: {
    teamGroupMapping: [
      { id: 1, name: 'Team 1', groupNames: ['Group A', 'Group B'], directoryId: 'dir1' },
      { id: 2, name: 'Team 2', groupNames: ['Group C'], directoryId: 'dir2' },
    ],
  },
});

// Mock trpc
jest.mock('@calcom/trpc/react', () => ({
  trpc: {
    viewer: {
      dsync: {
        teamGroupMapping: {
          get: {
            useQuery: mockUseQuery,
          },
        },
      },
    },
  },
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockData: {
      type: "boolean",
      value: true,
      label: "Use Mock Data",
    },
  });

  // Override trpc.viewer.dsync.teamGroupMapping.get.useQuery if mockData is true
  if (state.mockData.value) {
    trpc.viewer.dsync.teamGroupMapping.get.useQuery = mockUseQuery;
  }

  return <ImportedComponent />;
}