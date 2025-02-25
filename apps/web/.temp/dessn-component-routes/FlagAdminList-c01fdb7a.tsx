import React from 'react';
import { useParentState } from '../useIframeState';
import { FlagAdminList } from '../../../../packages/features/flags/components/FlagAdminList';

// Create a mock trpc object
const mockTrpc = {
  Provider: ({ children }) => children,
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

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div>
      <FlagAdminList trpc={mockTrpc} />
    </div>
  );
}