import React from 'react';
import { useParentState } from '../useIframeState';
import * as Popover from '@radix-ui/react-popover';

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
    <Popover.Root>
      <Popover.Trigger className={state.className.value}>
        {state.children.value}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="rounded p-4 bg-white shadow-lg">
          <div className="p-4">
            Popover Content
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}