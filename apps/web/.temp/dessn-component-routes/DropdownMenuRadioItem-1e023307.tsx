import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuRadioItem } from '../../../../packages/ui/components/dropdown/Dropdown';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value",
    },
    children: {
      type: "string",
      value: "Radio Item",
      label: "Children",
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={state.value.value} onValueChange={(value) => setState('value', value)}>
          <DropdownMenuRadioItem value={state.value.value}>
            {state.children.value}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}