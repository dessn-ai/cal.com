import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/developer/api-keys-view';

// Create a mock version of trpc
const mockTrpc = {
  viewer: {
    apiKeys: {
      list: {
        useQuery: () => ({
          data: [
            { id: 1, name: 'API Key 1', expiresAt: '2023-12-31' },
            { id: 2, name: 'API Key 2', expiresAt: null },
          ],
          isPending: false,
        }),
      },
    },
  },
};

// Override the actual trpc import with our mock
const trpc = mockTrpc;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any props here if needed in the future
  });

  return <ImportedComponent />;
}