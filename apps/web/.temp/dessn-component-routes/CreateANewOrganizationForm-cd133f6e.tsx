import React from 'react';
import { CreateANewOrganizationForm } from '../../../../packages/features/ee/organizations/components/CreateANewOrganizationForm';
import { SessionProvider, useSession } from 'next-auth/react';
import { UserPermissionRole } from '@calcom/prisma/enums';

// Create a wrapper component that provides session context
const FormWithSession = () => {
  const session = {
    data: {
      user: {
        id: 1,
        email: 'user@example.com',
        name: 'Test User',
        role: UserPermissionRole.ADMIN, // Changed to ADMIN to match component expectations
        username: 'testuser',
        completedOnboarding: true,
        timeZone: 'UTC',
        weekStart: 'Monday',
        startTime: 0,
        endTime: 1440,
        defaultScheduleId: null,
        bufferTime: 0,
        theme: null,
      },
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
    },
    status: "authenticated" as const,
    update: () => Promise.resolve(null)
  };

  return (
    <SessionProvider session={session}>
      <CreateANewOrganizationForm />
    </SessionProvider>
  );
};

export default function ComponentPreview() {
  return (
    <div className="m-4">
      <FormWithSession />
    </div>
  );
}