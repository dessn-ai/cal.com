import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogTrigger } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Open Dialog",
      label: "Button Text",
    },
    className: {
      type: "string",
      value: "px-4 py-2 bg-blue-500 text-white rounded",
      label: "CSS Class",
    },
  });

  return (
    <DialogTrigger className={state.className.value}>
      {state.children.value}
    </DialogTrigger>
  );
}