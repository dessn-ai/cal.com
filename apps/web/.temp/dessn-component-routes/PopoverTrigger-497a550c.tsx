import React from 'react';
import { useParentState } from '../useIframeState';
import { PopoverTrigger } from '../../../../packages/ui/components/popover/Popover';


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
    <PopoverTrigger className={state.className.value}>
      {state.children.value}
    </PopoverTrigger>
  );
}