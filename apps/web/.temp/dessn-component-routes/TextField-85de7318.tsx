import React from 'react';
import { useParentState } from '../useIframeState';
import { TextField } from '../../../../packages/ui/components/form/inputs/TextField';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Sample Label",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Enter text here",
      label: "Placeholder",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    type: {
      type: "dropdown",
      value: "text",
      options: ["text", "password", "email", "number", "search"],
      label: "Input Type",
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md"],
      label: "Size",
    },
  });

  return (
    <TextField
      label={state.label.value}
      placeholder={state.placeholder.value}
      disabled={state.disabled.value}
      required={state.required.value}
      type={state.type.value}
      size={state.size.value as "sm" | "md"}
      onChange={(e) => console.log(e.target.value)}
    />
  );
}