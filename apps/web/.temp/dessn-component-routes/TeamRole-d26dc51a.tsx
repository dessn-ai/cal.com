import React from 'react';
import { useParentState } from '../useIframeState';
import TeamPill from '../../../../packages/features/ee/teams/components/TeamPill';
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

  const role = state.role.value as MembershipRole;
  const keys = {
    [MembershipRole.OWNER]: "blue",
    [MembershipRole.ADMIN]: "red",
    [MembershipRole.MEMBER]: undefined,
  };

  return (
    <TeamPill 
      text={role.toLowerCase()}
      color={keys[role]}
    />
  );
}