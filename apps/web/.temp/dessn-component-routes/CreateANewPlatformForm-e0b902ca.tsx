import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewPlatformForm } from '../../../../packages/features/ee/platform/components/CreateANewPlatformForm';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockSession: {
      type: 'boolean',
      value: true,
      label: 'Mock Session',
    },
  });

  const mockSession = {
    data: state.mockSession.value
      ? {
          user: {
            email: 'test@example.com',
            role: 'ADMIN',
          },
        }
      : null,
    update: async () => {},
  };

  return (
    <SessionProvider session={mockSession}>
      <CreateANewPlatformForm />
    </SessionProvider>
  );
}