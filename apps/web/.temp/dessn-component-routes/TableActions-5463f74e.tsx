import React from 'react';
import { useParentState } from '../useIframeState';
import { TableActions } from '../../../../packages/ui/components/table/TableActions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    actions: {
      type: "string",
      value: JSON.stringify([
        {
          id: "action1",
          label: "Action 1",
          icon: "edit",
          onClick: () => console.log("Action 1 clicked")
        },
        {
          id: "action2",
          label: "Action 2",
          icon: "trash",
          onClick: () => console.log("Action 2 clicked")
        }
      ]),
      label: "Actions"
    }
  });

  const actions = JSON.parse(state.actions.value);

  return <TableActions actions={actions} />;
}