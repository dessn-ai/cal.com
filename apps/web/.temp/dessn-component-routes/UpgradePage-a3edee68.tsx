import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/upgrade/upgrade-view';

// Create a mock TRPC context
const TRPCContext = React.createContext({});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  const mockTrpcValue = {
    viewer: {
      organizations: {
        checkIfOrgNeedsUpgrade: {
          useQuery: () => ({
            data: true,
            isLoading: false,
            error: null,
          }),
        },
        publish: {
          useMutation: () => ({
            mutate: async () => {},
            isLoading: false,
            error: null,
          }),
        },
      },
    },
  };

  return (
    <TRPCContext.Provider value={mockTrpcValue}>
      {children}
    </TRPCContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    doesUserHaveOrgToUpgrade: {
      type: 'boolean',
      value: true,
      label: 'User Has Org To Upgrade',
    },
  });

  return (
    <MockTRPCProvider>
      <ImportedComponent />
    </MockTRPCProvider>
  );
}

// Export the context for components that might need it
export const useTRPC = () => React.useContext(TRPCContext);