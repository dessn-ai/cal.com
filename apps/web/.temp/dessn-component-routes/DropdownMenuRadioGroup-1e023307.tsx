import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuRadioGroup } from '../../../../packages/ui/components/dropdown/Dropdown';

import { Dropdown, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioItem } from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedValue: {
      type: "string",
      value: "option1",
      label: "Selected Value",
    },
  });

  return (
    <Dropdown>
      <DropdownMenuTrigger>Select an option</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={state.selectedValue.value} onValueChange={(value) => setState('selectedValue', value)}>
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option3">Option 3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </Dropdown>
  );
}