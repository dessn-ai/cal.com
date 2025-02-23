import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileNavigationMoreItem } from '../../../../packages/features/shell/navigation/NavigationItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    item: {
      type: "object",
      value: {
        name: "Example Item",
        href: "/example",
        icon: "calendar",
      },
      label: "Navigation Item",
    },
    isChild: {
      type: "boolean",
      value: false,
      label: "Is Child",
    },
  });

  return (
    <MobileNavigationMoreItem
      item={state.item.value}
      isChild={state.isChild.value}
    />
  );
}