import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/page/team-dsync-view';

// Mock the trpc module
const mockTrpc = {
  viewer: {
    organizations: {
      listCurrent: {
        useQuery: () => ({
          data: { id: '123' },
          isLoading: false,
          error: null,
        }),
      },
    },
  },
};

// Override the real trpc with our mock
export const trpc = mockTrpc;

// Mock router object
const mockRouter = {
  push: () => {},
};

// Mock constants
const HOSTED_CAL_FEATURES = true;

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