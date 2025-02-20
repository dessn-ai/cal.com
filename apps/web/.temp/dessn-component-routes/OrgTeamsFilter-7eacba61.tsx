import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgTeamsFilter } from '../../../../packages/features/insights/filters/OrgTeamsFilter';

import { useSession } from 'next-auth/react';
import { trpc } from '@calcom/trpc';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  // Mock useSession
  const mockSession = {
    data: {
      user: {
        org: { id: 1 },
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar.jpg',
      },
    },
  };
  (useSession as jest.Mock).mockReturnValue(mockSession);

  // Mock trpc
  const mockTrpc = {
    viewer: {
      insights: {
        teamListForUser: {
          useQuery: jest.fn().mockReturnValue({
            data: [
              { id: 1, name: 'Team 1', logoUrl: 'https://example.com/logo1.jpg', isOrg: true },
              { id: 2, name: 'Team 2', logoUrl: 'https://example.com/logo2.jpg', isOrg: false },
              { id: 3, name: 'Team 3', logoUrl: 'https://example.com/logo3.jpg', isOrg: false },
            ],
          }),
        },
      },
    },
  };
  (trpc as unknown as jest.Mock).mockReturnValue(mockTrpc);

  return <OrgTeamsFilter />;
}