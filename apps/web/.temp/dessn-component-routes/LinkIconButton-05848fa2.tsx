import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/button/LinkIconButton';

import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    Icon: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "user", "clock", "link"],
      label: "Icon",
    },
    children: {
      type: "string",
      value: "Click me",
      label: "Button Text",
    },
  });

  return (
    <ImportedComponent
      Icon={state.Icon.value as any}
      onClick={() => console.log("Button clicked")}
    >
      {state.children.value}
    </ImportedComponent>
  );
}