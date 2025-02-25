import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/GroupTeamMappingTable';
import { trpc } from '@calcom/trpc/react';

// Mock data
const mockTeamGroupMapping = {
  data: {
    teamGroupMapping: [
      { id: 1, name: 'Team 1', groupNames: ['Group A', 'Group B'], directoryId: 'dir1' },
      { id: 2, name: 'Team 2', groupNames: ['Group C'], directoryId: 'dir2' },
    ],
  },
};

// Create a mock query function
const mockUseQuery = () => mockTeamGroupMapping;

// Override the specific TRPC endpoint we need
const originalTrpc = { ...trpc };
const mockedTrpc = {
  ...originalTrpc,
  viewer: {
    ...originalTrpc.viewer,
    dsync: {
      ...originalTrpc.viewer?.dsync,
      teamGroupMapping: {
        ...originalTrpc.viewer?.dsync?.teamGroupMapping,
        get: {
          useQuery: mockUseQuery,
        },
      },
    },
  },
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockData: {
      type: "boolean",
      value: true,
      label: "Use Mock Data",
    },
  });

  // Use either the mocked or original TRPC based on the mockData flag
  React.useEffect(() => {
    if (state.mockData.value) {
      Object.assign(trpc, mockedTrpc);
    } else {
      Object.assign(trpc, originalTrpc);
    }
  }, [state.mockData.value]);

  return <ImportedComponent />;
}