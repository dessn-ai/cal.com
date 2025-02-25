import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownItem } from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dropdown Item",
      label: "Children",
    },
    color: {
      type: "dropdown",
      value: "default",
      options: ["default", "destructive"],
      label: "Color",
    },
    StartIcon: {
      type: "string",
      value: "calendar",
      label: "Start Icon",
    },
    kbd: {
      type: "string",
      value: "⌘K",
      label: "Keyboard Shortcut",
    },
    EndIcon: {
      type: "string",
      value: "chevron-right",
      label: "End Icon",
    },
    href: {
      type: "string",
      value: "#",
      label: "Href",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    childrenClassName: {
      type: "string",
      value: "",
      label: "Children Class Name",
    },
  });

  return (
    <DropdownItem
      color={state.color.value as "default" | "destructive"}
      StartIcon={state.StartIcon.value as any}
      kbd={state.kbd.value}
      EndIcon={state.EndIcon.value as any}
      href={state.href.value}
      disabled={state.disabled.value}
      childrenClassName={state.childrenClassName.value}
    >
      {state.children.value}
    </DropdownItem>
  );
}