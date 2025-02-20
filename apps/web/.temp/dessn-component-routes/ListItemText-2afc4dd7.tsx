import React from 'react';
import { useParentState } from '../useIframeState';
import { ListItemText } from '../../../../packages/ui/components/list/List';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample Text",
      label: "Children",
    },
    component: {
      type: "dropdown",
      value: "span",
      options: ["span", "div", "p"],
      label: "Component",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ListItemText
      component={state.component.value as "span" | "div" | "p"}
      className={state.className.value}
    >
      {state.children.value}
    </ListItemText>
  );
}