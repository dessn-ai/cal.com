import React from 'react';
import { useParentState } from '../useIframeState';
import { Dropdown, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../../../../packages/ui/components/dropdown/Dropdown';

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
        Click me
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className={state.className.value}>
          {state.children.value}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}