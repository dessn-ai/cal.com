import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandInput } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    placeholder: {
      type: "string",
      value: "Type a command or search...",
      label: "Placeholder",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <CommandInput
      className={state.className.value}
      placeholder={state.placeholder.value}
      disabled={state.disabled.value}
    />
  );
}