import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamPill';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "Team Member",
      label: "Text",
    },
    color: {
      type: "dropdown",
      value: "blue",
      options: ["blue", "green", "red", "orange"],
      label: "Color",
    },
    role: {
      type: "dropdown",
      value: "MEMBER",
      options: ["OWNER", "ADMIN", "MEMBER"],
      label: "Role",
    },
  });

  return (
    <>
      <ImportedComponent text={state.text.value} color={state.color.value as "blue" | "green" | "red" | "orange"} />
      <ImportedComponent.TeamRole role={state.role.value as MembershipRole} />
    </>
  );
}