import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewPlatformForm } from '../../../../packages/features/ee/platform/components/CreateANewPlatformForm';
import { SessionProvider } from 'next-auth/react';
import { UserPermissionRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockSession: {
      type: 'boolean',
      value: true,
      label: 'Mock Session',
    },
  });

  const mockSession = {
    data: {
      user: {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        role: UserPermissionRole.ADMIN,
        username: 'testuser',
        completedOnboarding: true,
        timeZone: 'UTC',
        weekStart: 'Monday',
        theme: null,
        defaultScheduleId: null,
        locale: 'en',
      },
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
    },
    status: "authenticated",
    update: async () => Promise.resolve({}),
  };

  return (
    <div className="p-6">
      <SessionProvider session={mockSession}>
        <CreateANewPlatformForm />
      </SessionProvider>
    </div>
  );
}