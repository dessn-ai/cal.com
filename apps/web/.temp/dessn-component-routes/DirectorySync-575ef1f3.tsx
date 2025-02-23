import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/page/team-dsync-view';

// Mock implementations
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

// Override the actual trpc import with our mock
export const trpc = mockTrpc;

// Mock router
const mockRouter = {
  push: () => {},
};

// Mock constants
const HOSTED_CAL_FEATURES = true;

// Make mocks available globally
(global as any).HOSTED_CAL_FEATURES = HOSTED_CAL_FEATURES;

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