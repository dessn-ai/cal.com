import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandItem } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Command Item Content",
      label: "Children",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <CommandItem
      className={state.className.value}
      disabled={state.disabled.value}
    >
      {state.children.value}
    </CommandItem>
  );
}