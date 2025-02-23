import React from 'react';
import { useParentState } from '../useIframeState';
import { FlagAdminList } from '../../../../packages/features/flags/components/FlagAdminList';
import { trpc } from "@calcom/trpc/react";

// Create a mock trpc client
const mockTrpc = {
  viewer: {
    features: {
      list: {
        useSuspenseQuery: () => [{
          data: [
            {
              slug: "test-flag",
              type: "BOOLEAN",
              description: "This is a test flag",
              enabled: true
            },
            {
              slug: "another-flag",
              type: "STRING",
              description: "This is another test flag",
              enabled: false
            }
          ]
        }]
      }
    },
    admin: {
      toggleFeatureFlag: {
        useMutation: () => ({
          mutate: () => {}
        })
      }
    }
  },
  useUtils: () => ({
    viewer: {
      features: {
        list: {
          invalidate: () => {}
        },
        map: {
          invalidate: () => {}
        }
      }
    }
  })
};

// Create a mock client for the Provider
const mockClient = {
  ...mockTrpc,
  Provider: ({ children }) => <>{children}</>,
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div>
      <FlagAdminList />
    </div>
  );
}