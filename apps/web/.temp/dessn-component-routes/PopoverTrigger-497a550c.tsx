import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverTrigger, PopoverContent } from '../../../../packages/ui/components/popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Click me",
      label: "Trigger Text",
    },
    className: {
      type: "string",
      value: "bg-blue-500 text-white px-4 py-2 rounded",
      label: "CSS Class",
    },
  });

  return (
    <Popover>
      <PopoverTrigger className={state.className.value}>
        {state.children.value}
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <p>Popover content</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}