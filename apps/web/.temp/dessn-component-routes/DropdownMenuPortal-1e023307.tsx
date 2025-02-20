import React from 'react';
import { useParentState } from '../useIframeState';
import { Dropdown, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuPortal } from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    theme: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark"],
      label: "Theme",
    },
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
  });

  return (
    <Dropdown>
      <DropdownMenuTrigger>
        Click to Open
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          theme={state.theme.value as "light" | "dark"}
          align={state.align.value as "start" | "center" | "end"}
          sideOffset={state.sideOffset.value}
        >
          <div>Dropdown Content</div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Dropdown>
  );
}