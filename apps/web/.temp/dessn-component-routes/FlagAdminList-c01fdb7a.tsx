import React from 'react';
import { useParentState } from '../useIframeState';
import { FlagAdminList } from '../../../../packages/features/flags/components/FlagAdminList';

// Create mock trpc implementation
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
  }),
  Provider: ({ children }) => <>{children}</> // Mock Provider component
};

// Override the actual trpc with our mock
const trpc = mockTrpc;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div>
      <FlagAdminList />
    </div>
  );
}