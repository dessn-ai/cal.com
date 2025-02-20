import React from 'react';
import { useParentState } from '../useIframeState';
import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dropdown Item",
      label: "Children",
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
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className={state.className.value}>
          {state.children.value}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}