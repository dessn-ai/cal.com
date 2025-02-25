import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teams: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Team 1",
          slug: "team-1",
          role: "OWNER",
        },
        {
          id: 2,
          name: "Team 2",
          slug: "team-2",
          role: "MEMBER",
        },
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