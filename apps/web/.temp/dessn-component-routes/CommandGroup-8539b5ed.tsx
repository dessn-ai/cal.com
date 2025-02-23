import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandGroup } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Command Group Content",
      label: "Children",
    },
  });

  return (
    <CommandGroup className={state.className.value}>
      {state.children.value}
    </CommandGroup>
  );
}