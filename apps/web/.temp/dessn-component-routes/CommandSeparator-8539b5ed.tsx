import React from 'react';
import { useParentState } from '../useIframeState';
import { Command, CommandInput, CommandList, CommandItem, CommandSeparator } from '../../../../packages/ui/components/command/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator className={state.className.value} />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    </div>
  );
}