import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamRole } from '../../../../packages/features/ee/teams/components/TeamPill';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    role: {
      type: "dropdown",
      value: "MEMBER",
      options: ["OWNER", "ADMIN", "MEMBER"],
      label: "Role",
    },
  });

  return (
    <TeamRole
      role={state.role.value as MembershipRole}
    />
  );
}