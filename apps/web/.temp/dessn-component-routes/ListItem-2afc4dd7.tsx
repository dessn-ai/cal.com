import React from 'react';
import { useParentState } from '../useIframeState';
import { ListItem } from '../../../../packages/ui/components/list/List';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    expanded: {
      type: "boolean",
      value: false,
      label: "Expanded",
    },
    rounded: {
      type: "boolean",
      value: true,
      label: "Rounded",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ListItem
      expanded={state.expanded.value}
      rounded={state.rounded.value}
      className={state.className.value}
    >
      List Item Content
    </ListItem>
  );
}