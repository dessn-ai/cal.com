import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/password-view';
import { useForm } from 'react-hook-form';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC client
const mockTrpcClient = {
  viewer: {
    me: {
      useQuery: () => ({
        data: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
          name: 'Test User',
          identityProvider: 'CAL',
          passwordAdded: true,
          metadata: {},
        },
        isPending: false,
      }),
    },
  },
};

// Create a mock TRPC context
const TRPCContext = React.createContext(null);

// Create a mock provider component
const MockTRPCProvider = ({ children }) => {
  return (
    <TRPCContext.Provider value={mockTrpcClient}>
      {children}
    </TRPCContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any props here if needed
  });

  return (
    <MockTRPCProvider>
      <ImportedComponent />
    </MockTRPCProvider>
  );
}