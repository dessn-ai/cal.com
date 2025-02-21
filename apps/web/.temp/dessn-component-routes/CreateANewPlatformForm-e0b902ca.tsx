import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewPlatformForm } from '../../../../packages/features/ee/platform/components/CreateANewPlatformForm';
import { UserPermissionRole } from '@calcom/prisma/enums';
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
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    data: {
      user: {
        id: "1",
        email: "test@example.com",
        name: "Test User",
        role: UserPermissionRole.ADMIN,
        username: "testuser",
        completedOnboarding: true,
        timeZone: "UTC",
        weekStart: "Monday",
        locale: "en"
      },
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
    },
    status: "authenticated",
    update: async () => Promise.resolve(mockSession)
  };

  return (
    <div className="w-full">
      <SessionProvider session={mockSession}>
        <CreateANewPlatformForm />
      </SessionProvider>
    </div>
  );
}