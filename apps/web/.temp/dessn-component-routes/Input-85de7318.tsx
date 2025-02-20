import React from 'react';
import { useParentState } from '../useIframeState';
import { Input } from '../../../../packages/ui/components/form/inputs/TextField';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "",
      label: "Input Value",
    },
    placeholder: {
      type: "string",
      value: "Enter text...",
      label: "Placeholder",
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md"],
      label: "Size",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isFullWidth: {
      type: "boolean",
      value: true,
      label: "Full Width",
    },
  });

  return (
    <Input
      value={state.value.value}
      onChange={(e) => setState('value', e.target.value)}
      placeholder={state.placeholder.value}
      size={state.size.value as "sm" | "md"}
      disabled={state.disabled.value}
      isFullWidth={state.isFullWidth.value}
    />
  );
}