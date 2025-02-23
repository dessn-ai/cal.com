import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/password-view';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC provider
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
const trpc = createTRPCReact();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any props here if needed
  });

  const methods = useForm();

  return (
    <TRPCContext.Provider value={mockTrpcClient as any}>
      <FormProvider {...methods}>
        <ImportedComponent />
      </FormProvider>
    </TRPCContext.Provider>
  );
}