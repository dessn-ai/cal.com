import React from 'react';
import { useParentState } from '../useIframeState';
import { List } from '../../../../packages/ui/components/list/List';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    roundContainer: {
      type: "boolean",
      value: false,
      label: "Round Container",
    },
    noBorderTreatment: {
      type: "boolean",
      value: false,
      label: "No Border Treatment",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <List
      roundContainer={state.roundContainer.value}
      noBorderTreatment={state.noBorderTreatment.value}
      className={state.className.value}
    >
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </List>
  );
}