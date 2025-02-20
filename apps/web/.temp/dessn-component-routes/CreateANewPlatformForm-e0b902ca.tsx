import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewPlatformForm } from '../../../../packages/features/ee/platform/components/CreateANewPlatformForm';
import { SessionProvider } from 'next-auth/react';
import { UserPermissionRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const mockSession = {
    data: {
      user: {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        role: UserPermissionRole.ADMIN,
        username: 'testuser',
      },
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
    },
    status: 'authenticated',
    update: async () => Promise.resolve(null),
  };

  return (
    <div className="m-8">
      <SessionProvider session={mockSession}>
        <CreateANewPlatformForm />
      </SessionProvider>
    </div>
  );
}