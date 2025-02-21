import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/components/OtherTeamList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teams: {
      type: "string",
      value: JSON.stringify([
        { id: 1, name: "Team A", slug: "team-a", members: [{ id: 1, name: "John Doe" }] },
        { id: 2, name: "Team B", slug: "team-b", members: [{ id: 2, name: "Jane Smith" }] },
      ]),
      label: "Teams",
    },
    pending: {
      type: "boolean",
      value: false,
      label: "Pending",
    },
  });

  const teams = JSON.parse(state.teams.value);

  return <ImportedComponent teams={teams} pending={state.pending.value} />;
}