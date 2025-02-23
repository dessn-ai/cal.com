import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MakeTeamPrivateSwitch';
import { trpc } from '@calcom/trpc/react';

// Create a mock TRPC provider component
const MockTRPCProvider = ({ children }) => {
  const mockTrpcValue = {
    viewer: {
      teams: {
        update: {
          useMutation: () => ({
            mutate: async () => {},
            isPending: false
          })
        }
      }
    }
  };

  // Override the trpc hooks that the component uses
  const originalUseContext = React.useContext;
  React.useContext = (context) => {
    if (context === trpc.context) {
      return mockTrpcValue;
    }
    return originalUseContext(context);
  };

  return children;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  // Create mock functions that the component might need
  const mockUtils = {
    viewer: {
      teams: {
        get: {
          invalidate: async () => {}
        }
      }
    }
  };

  // Override trpc.useUtils
  trpc.useUtils = () => mockUtils;

  return (
    <MockTRPCProvider>
      <ImportedComponent
        teamId={state.teamId.value}
        isPrivate={state.isPrivate.value}
        disabled={state.disabled.value}
        isOrg={state.isOrg.value}
      />
    </MockTRPCProvider>
  );
}