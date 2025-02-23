import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuTrigger, Dropdown, DropdownMenuContent } from '../../../../packages/ui/components/dropdown/Dropdown';

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
    <Dropdown>
      <DropdownMenuTrigger
        className={state.className.value}
        asChild={state.asChild.value}
      >
        Dropdown Trigger
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Adding empty content to make the dropdown valid */}
      </DropdownMenuContent>
    </Dropdown>
  );
}