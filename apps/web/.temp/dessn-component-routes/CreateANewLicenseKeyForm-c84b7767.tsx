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

  // Create a session object that exactly matches next-auth's expected format
  const session = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    user: {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: state.mockSession.value ? 'ADMIN' : 'USER',
      username: 'admin',
      completedOnboarding: true,
      timeZone: 'UTC',
      weekStart: 'Monday',
      theme: null,
      defaultScheduleId: null,
      locale: 'en'
    }
  };

  return (
    <SessionProvider 
      session={session}
      refetchInterval={0}
      refetchOnWindowFocus={false}
    >
      <CreateANewLicenseKeyForm />
    </SessionProvider>
  );
}