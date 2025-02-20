import React from 'react';
import { useParentState } from '../useIframeState';
import Dropdown, { 
  DropdownMenuTrigger, 
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup 
} from '../../../../packages/ui/components/dropdown/Dropdown';

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
    <Dropdown>
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
    </Dropdown>
  );
}