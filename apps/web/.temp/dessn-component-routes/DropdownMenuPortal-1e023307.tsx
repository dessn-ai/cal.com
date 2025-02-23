import React from 'react';
import { useParentState } from '../useIframeState';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button">Click me</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={state.align.value as "start" | "center" | "end"}
          sideOffset={state.sideOffset.value}
          className={state.theme.value === 'dark' ? 'dark' : ''}
        >
          <div>Dropdown Content</div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}