import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/CreateEventTypeDialog';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    profileOptions: {
      type: 'string',
      value: JSON.stringify([
        {
          teamId: 1,
          label: 'Team A',
          image: 'https://example.com/team-a.jpg',
          membershipRole: MembershipRole.MEMBER,
        },
        {
          teamId: null,
          label: 'Personal',
          image: 'https://example.com/personal.jpg',
          membershipRole: null,
        },
        {
          teamId: 2,
          label: 'Team B',
          image: 'https://example.com/team-b.jpg',
          membershipRole: MembershipRole.ADMIN,
        },
      ]),
      label: 'Profile Options',
    },
  });

  const profileOptions = JSON.parse(state.profileOptions.value);

  return <ImportedComponent profileOptions={profileOptions} />;
}