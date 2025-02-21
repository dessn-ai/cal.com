import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamAvailabilityModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({ id: 1, name: "Sample Team" }),
      label: "Team",
    },
    member: {
      type: "string",
      value: JSON.stringify({ id: 1, name: "John Doe", username: "johndoe" }),
      label: "Member",
    },
  });

  const team = state.team.value ? JSON.parse(state.team.value) : undefined;
  const member = state.member.value ? JSON.parse(state.member.value) : undefined;

  return <ImportedComponent team={team} member={member} />;
}