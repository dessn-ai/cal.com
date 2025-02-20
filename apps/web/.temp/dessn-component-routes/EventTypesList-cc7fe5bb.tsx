import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/users/components/UserTable/BulkActions/EventTypesList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: {},
      label: "Table",
    },
    orgTeams: {
      type: "object",
      value: undefined,
      label: "Organization Teams",
    },
  });

  return (
    <EventTypesList
      table={state.table.value}
      orgTeams={state.orgTeams.value}
    />
  );
}