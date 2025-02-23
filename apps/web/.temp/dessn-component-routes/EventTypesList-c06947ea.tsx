import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/ee/teams/components/EventTypesList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: {},
      label: "Table",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  return (
    <EventTypesList
      table={state.table.value}
      teamId={state.teamId.value}
    />
  );
}