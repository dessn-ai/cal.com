import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandEmpty } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "No results found.",
      label: "Children",
    },
  });

  return (
    <CommandEmpty className={state.className.value}>
      {state.children.value}
    </CommandEmpty>
  );
}