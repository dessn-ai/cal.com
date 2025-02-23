import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileNavigationItem } from '../../../../packages/features/shell/navigation/NavigationItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    item: {
      type: "object",
      value: {
        name: "Home",
        href: "/",
        icon: "home"
      },
      label: "Navigation Item"
    },
    isChild: {
      type: "boolean",
      value: false,
      label: "Is Child"
    }
  });

  return (
    <MobileNavigationItem
      item={state.item.value}
      isChild={state.isChild.value}
    />
  );
}