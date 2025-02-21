import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamMembersForm } from '../../../../packages/features/ee/teams/components/AddNewTeamMembers';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  const form = useForm();

  return (
    <AddNewTeamMembersForm
      teamId={state.teamId.value}
      isOrg={state.isOrg.value}
    />
  );
}