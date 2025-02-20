import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuItem } from '../../../../packages/ui/components/dropdown/Dropdown';


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
    <DropdownMenuItem className={state.className.value}>
      {state.children.value}
    </DropdownMenuItem>
  );
}