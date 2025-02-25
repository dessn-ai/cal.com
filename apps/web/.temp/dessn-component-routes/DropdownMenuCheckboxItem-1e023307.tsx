import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem 
} from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
    children: {
      type: "string",
      value: "Checkbox Item",
      label: "Children",
    },
  });

  const handleCheckedChange = (checked: boolean) => {
    setState("checked", checked);
  };

  return (
    <Dropdown>
      <DropdownMenuTrigger>
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={state.checked.value}
          onCheckedChange={handleCheckedChange}
        >
          {state.children.value}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}