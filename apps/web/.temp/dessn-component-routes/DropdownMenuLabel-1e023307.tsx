import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuLabel } from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-label",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Dropdown Label",
      label: "Label Text",
    },
  });

  return (
    <DropdownMenuLabel 
      className={state.className.value}
    >
      {state.children.value}
    </DropdownMenuLabel>
  );
}