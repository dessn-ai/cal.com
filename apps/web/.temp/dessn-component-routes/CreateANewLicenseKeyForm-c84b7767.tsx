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

  // Create a properly structured mock session
  const mockSession = {
    data: {
      user: {
        id: 1,
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'ADMIN',
        username: 'admin',
      },
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    },
    status: 'authenticated',
  };

  return (
    <div className="m-4">
      <SessionProvider session={mockSession}>
        <CreateANewLicenseKeyForm />
      </SessionProvider>
    </div>
  );
}