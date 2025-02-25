import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/LinkIconButton';

import { Icon } from "@calcom/ui";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    Icon: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "user", "clock", "link", "trash"],
      label: "Icon",
    },
    children: {
      type: "string",
      value: "Click me",
      label: "Button Text",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <ImportedComponent
      Icon={state.Icon.value as React.ComponentProps<typeof Icon>["name"]}
      disabled={state.disabled.value}
      onClick={() => console.log("Button clicked")}
    >
      {state.children.value}
    </ImportedComponent>
  );
}