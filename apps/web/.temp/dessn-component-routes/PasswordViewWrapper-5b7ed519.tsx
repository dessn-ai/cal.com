import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/password-view';

import { useForm } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any props here if needed
  });

  // Mock the trpc.viewer.me.useQuery hook
  const mockUseQuery = () => ({
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
  });

  // Mock the trpc object
  const mockTrpc = {
    viewer: {
      me: {
        useQuery: mockUseQuery,
      },
    },
  };

  // Provide the mocked trpc to the component
  (trpc as any) = mockTrpc;

  return <ImportedComponent />;
}