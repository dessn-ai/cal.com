import React from 'react';
import { useParentState } from '../useIframeState';
import { NavigationItem } from '../../../../packages/features/shell/navigation/NavigationItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    index: {
      type: "number",
      value: 0,
      label: "Index",
    },
    item: {
      type: "dropdown",
      value: "Home",
      options: ["Home", "Calendar", "Settings"],
      label: "Item",
    },
    isChild: {
      type: "boolean",
      value: false,
      label: "Is Child",
    },
  });

  const item = {
    name: state.item.value,
    href: `/${state.item.value.toLowerCase()}`,
    icon: "calendar",
  };

  return (
    <NavigationItem
      index={state.index.value}
      item={item}
      isChild={state.isChild.value}
    />
  );
}