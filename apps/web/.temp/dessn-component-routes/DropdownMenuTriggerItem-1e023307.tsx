import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuTriggerItem } from '../../../../packages/ui/components/dropdown/Dropdown';

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dropdown Trigger",
      label: "Children",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuTriggerItem
        className={state.className.value}
        disabled={state.disabled.value}
      >
        {state.children.value}
      </DropdownMenuTriggerItem>
    </DropdownMenuPrimitive.Root>
  );
}