import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/GroupTeamMappingTable';
import { trpc } from '@calcom/trpc/react';

// Mock data
const mockData = {
  teamGroupMapping: [
    { id: 1, name: 'Team 1', groupNames: ['Group A', 'Group B'], directoryId: 'dir1' },
    { id: 2, name: 'Team 2', groupNames: ['Group C'], directoryId: 'dir2' },
  ],
};

// Mock useQuery function
const mockUseQuery = () => ({
  data: mockData,
  isLoading: false,
  error: null,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockData: {
      type: "boolean",
      value: true,
      label: "Use Mock Data",
    },
  });

  // Create a wrapped component that uses either mock or real data
  const WrappedComponent = () => {
    // Override the query result if mockData is true
    if (state.mockData.value) {
      // @ts-ignore - we're intentionally mocking the query
      trpc.viewer.dsync.teamGroupMapping.get.useQuery = mockUseQuery;
    }

    return <ImportedComponent />;
  };

  return <WrappedComponent />;
}