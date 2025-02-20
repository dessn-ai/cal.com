import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewOrganizationForm } from '../../../../packages/features/ee/organizations/components/CreateANewOrganizationForm';

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
            email: 'user@example.com',
            role: 'USER',
          },
        }
      : null,
    update: () => Promise.resolve(),
  };

  return (
    <SessionProvider session={mockSession}>
      <CreateANewOrganizationForm />
    </SessionProvider>
  );
}