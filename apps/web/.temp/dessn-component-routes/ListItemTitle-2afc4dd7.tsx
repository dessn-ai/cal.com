import React from 'react';
import { useParentState } from '../useIframeState';
import { ListItemTitle } from '../../../../packages/ui/components/list/List';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Example Title",
      label: "Children",
    },
    component: {
      type: "dropdown",
      value: "span",
      options: ["span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      label: "Component",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ListItemTitle
      component={state.component.value as keyof JSX.IntrinsicElements}
      className={state.className.value}
    >
      {state.children.value}
    </ListItemTitle>
  );
}