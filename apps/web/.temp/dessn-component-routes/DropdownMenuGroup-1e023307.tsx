import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuGroup } from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dropdown Menu Group",
      label: "Children",
    },
  });

  return (
    <DropdownMenuGroup>
      {state.children.value}
    </DropdownMenuGroup>
  );
}