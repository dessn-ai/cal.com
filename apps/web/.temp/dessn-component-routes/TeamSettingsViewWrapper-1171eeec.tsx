import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/pages/team-settings-view';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    membershipRole: {
      type: "dropdown",
      value: MembershipRole.OWNER,
      options: Object.values(MembershipRole),
      label: "Membership Role",
    },
    bookingLimits: {
      type: "string",
      value: JSON.stringify({ PER_DAY: 1 }),
      label: "Booking Limits",
    },
    includeManagedEventsInLimits: {
      type: "boolean",
      value: false,
      label: "Include Managed Events in Limits",
    },
  });

  const mockTeam = {
    id: state.teamId.value,
    membership: {
      role: state.membershipRole.value,
    },
    bookingLimits: JSON.parse(state.bookingLimits.value),
    includeManagedEventsInLimits: state.includeManagedEventsInLimits.value,
  };

  const mockTrpc = {
    useQuery: () => ({
      data: mockTeam,
      isPending: false,
      error: null,
    }),
    useMutation: () => ({
      mutate: () => {},
    }),
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ImportedComponent />
    </div>
  );
}