import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewLicenseKeyForm } from '../../../../packages/features/ee/deployment/licensekey/CreateLicenseKeyForm';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockSession: {
      type: 'boolean',
      value: true,
      label: 'Mock Admin Session',
    },
  });

  const mockSession = {
    data: {
      user: {
        role: state.mockSession.value ? 'ADMIN' : 'USER',
      },
    },
    status: 'authenticated',
  };

  return (
    <SessionProvider session={mockSession as any}>
      <CreateANewLicenseKeyForm />
    </SessionProvider>
  );
}