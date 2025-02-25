import React from 'react';
import { useParentState } from '../useIframeState';
import { Command, CommandList, CommandItem } from '../../../../packages/ui/components/command/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <Command>
      <CommandList className={state.className.value}>
        <CommandItem>Example Command List Item 1</CommandItem>
        <CommandItem>Example Command List Item 2</CommandItem>
        <CommandItem>Example Command List Item 3</CommandItem>
      </CommandList>
    </Command>
  );
}