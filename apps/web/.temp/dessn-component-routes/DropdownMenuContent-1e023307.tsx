import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuContent } from '../../../../packages/ui/components/dropdown/Dropdown';

import { Dropdown, DropdownMenuTrigger, DropdownMenuItem } from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "center", "end"],
      label: "Align",
    },
    sideOffset: {
      type: "number",
      value: 2,
      label: "Side Offset",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <Dropdown>
      <DropdownMenuTrigger>
        <button>Open Dropdown</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={state.align.value as "start" | "center" | "end"}
        sideOffset={state.sideOffset.value}
        className={state.className.value}
      >
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}