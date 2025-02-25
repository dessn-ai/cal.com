import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandShortcut } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "ml-2 text-xs",
      label: "Class Name",
    },
  });

  return (
    <CommandShortcut className={state.className.value}>
      ⌘K
    </CommandShortcut>
  );
}