import React from 'react';
import { useParentState } from '../useIframeState';
import Dropdown, { DropdownMenuTrigger, DropdownMenuContent } from '../../../../packages/ui/components/dropdown/Dropdown';

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
        {/* Adding some content to make the dropdown functional */}
        <div className="p-2">Dropdown Content</div>
      </DropdownMenuContent>
    </Dropdown>
  );
}