import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuTrigger } from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child",
    },
  });

  return (
    <DropdownMenuTrigger
      className={state.className.value}
      asChild={state.asChild.value}
    >
      Dropdown Trigger
    </DropdownMenuTrigger>
  );
}