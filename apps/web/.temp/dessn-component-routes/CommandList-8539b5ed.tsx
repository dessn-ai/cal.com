import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandList } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <CommandList className={state.className.value}>
      {/* Add some example content for the CommandList */}
      <div>Example Command List Item 1</div>
      <div>Example Command List Item 2</div>
      <div>Example Command List Item 3</div>
    </CommandList>
  );
}