import React from 'react';
import { useParentState } from '../useIframeState';
import { ProfileDropdown } from '../../../../packages/features/shell/user-dropdown/ProfileDropdown';

import { SessionProvider } from 'next-auth/react';
import { trpc } from '@calcom/trpc';

const mockSession = {
  user: {
    name: 'John Doe',
  },
  upId: 'user123',
};

const mockProfiles = [
  { upId: 'user123', organization: { name: 'Personal' } },
  { upId: 'org456', organization: { name: 'Work Organization' } },
];

const mockTrpcQuery = {
  data: {
    profiles: mockProfiles,
  },
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    enableProfileSwitcher: {
      type: 'boolean',
      value: true,
      label: 'Enable Profile Switcher',
    },
  });

  // Mock the trpc hook
  trpc.viewer.me.useQuery = () => mockTrpcQuery;

  return (
    <SessionProvider session={mockSession}>
      <div className="p-4 bg-gray-100">
        <ProfileDropdown />
      </div>
    </SessionProvider>
  );
}