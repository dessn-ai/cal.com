import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/DeleteBulkTeamMembers';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    users: {
      type: "string",
      value: JSON.stringify([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" }
      ]),
      label: "Users"
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization"
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID"
    }
  });

  const users = JSON.parse(state.users.value);

  return (
    <ImportedComponent
      users={users}
      onRemove={() => console.log("Users removed")}
      isOrg={state.isOrg.value}
      teamId={state.teamId.value}
    />
  );
}